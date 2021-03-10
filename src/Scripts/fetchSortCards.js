const axios = require("axios");

//VALIDATES TO CHECK FOR PACK CLICKED CONTAINS SHINYS
const validateID = (id) => {
  resetVariables();

  if (id === "swsh45") {
    //fetch from swsh45 and swsh45sv
    return getCardsFromMultipleSets(id, "swsh45sv");
  } else if (id === "sm115") {
    return getCardsFromMultipleSets(id, "sma");
    //fetch from sm115 and sma
  } else {
    return getCardsFromSet(id);
  }
};

const resetVariables = () => {
  finalPack = [];
  raritiesFound = [];
  energyCardFound = false;
  shinyDeck = false;
};

//IF PACK CONTAINS SHINYS API HAS 2 SETS FOR THEM
const getCardsFromMultipleSets = async (id, shinyID) => {
  resetVariables();

  const responseArr = await axios.all([
    axios.get(`https://api.pokemontcg.io/v2/cards?q=set.id:${id}`),
    axios.get(`https://api.pokemontcg.io/v2/cards?q=set.id:${shinyID}`),
  ]);

  const finalPokemonArray = responseArr[0].data.data.concat(
    responseArr[1].data.data
  );
  return raritySearch(finalPokemonArray);
};

//GET ALL SET CARDS FROM API
const getCardsFromSet = async (id) => {
  //   console.log(id);
  const response = await axios.get(
    `https://api.pokemontcg.io/v2/cards?q=set.id:${id}`
  );
  return raritySearch(response.data.data);
};

let finalPack = [];
let raritiesFound = [];
let energyCardFound = false;
let shinyDeck = false;

// getCardsFromSet("swsh45sv").then((entireData) => raritySearch(entireData.data));
// getCardsFromSet("swsh45").then((entireData) => raritySearch(entireData.data));
// validateID("sm115");
// validateID("swsh45");

//CHECKS FOR WHAT RARITIES ARE IN SET
const raritySearch = (entireSet) => {
  for (const cardRarity of entireSet) {
    if (!raritiesFound.includes(cardRarity.rarity)) {
      raritiesFound.push(cardRarity.rarity);
    }
  }

  //   console.log(raritiesFound);
  switch (checkRarities(raritiesFound)) {
    case 2: //RARITY MISSING SET
      handleDifferentRarities(raritiesFound);
      break;

    case 3: //SHINY SET
      shinyDeck = true;
      break;

    default:
      break;
  }

  // RESETS FINAL PACK
  if (finalPack.length === 10) {
    finalPack.length = 0;
  }

  for (const cardAdd of cardSpecs) {
    cardAdd.cardsFound = [];
    //resets the cardsfound

    finalPack = finalPack.concat(
      addToPack(
        entireSet,
        cardAdd.rarity,
        cardAdd.cardsFound,
        cardAdd.max,
        shinyDeck
      )
    );
  }
  //   console.log(finalPack);
  return finalPack;
};

//ALGORITHM FOR SENDING CARDS TO THE PACK
const addToPack = (entireSet, rarity, cardsFound, max, maybeShiny) => {
  let randomNum;

  while (cardsFound.length !== max) {
    randomNum = Math.floor(Math.random() * (entireSet.length - 1)) + 1;

    if (
      // SHINY PACK
      maybeShiny &&
      entireSet[randomNum].rarity.includes("Shiny") &&
      rarity === "Rare"
    ) {
      cardsFound.push(entireSet[randomNum]);
    } else if (
      //SUPER RARE DANK MEME CARD
      rarity === "Other Rare" &&
      (entireSet[randomNum].rarity.length > 8 ||
        entireSet[randomNum].rarity === "Rare ACE") &&
      !entireSet[randomNum].rarity.includes("Shiny")
    ) {
      cardsFound.push(entireSet[randomNum]);
    } else if (
      //CHECKS FOR ENERGY CARD FLAG
      energyCardFound === false &&
      entireSet[randomNum].supertype === "Energy"
    ) {
      //   console.log("FOUND ENERGY");
      energyCardFound = true;
      cardsFound.push(entireSet[randomNum]);
    } else if (
      //CARD IS SAME RARITY AS THE ONE ITS LOOKING FOR ADD TO PACK
      entireSet[randomNum].rarity === rarity &&
      !cardsFound.includes(entireSet[randomNum]) &&
      entireSet[randomNum].supertype !== "Energy"
    ) {
      cardsFound.push(entireSet[randomNum]);
    }
  }
  return cardsFound;
};

const checkRarities = (raritiesFound) => {
  if (
    raritiesFound.includes("Rare") &&
    raritiesFound.includes("Common") &&
    raritiesFound.includes("Uncommon")
  ) {
    //RESETS CARD SPECS
    cardSpecs[0].max = 5;
    cardSpecs[1].max = 3;
    cardSpecs[2].max = 1;
    cardSpecs[3].max = 1;

    //CHECKS IF DECK HAS SHINY OR JUST NORMAL
    if (raritiesFound.includes("Rare Shiny")) {
      //SHINY DECK
      return 3;
    } else {
      //NORMAL DECK
      return 1;
    }
  } else {
    //MISSING RARITY DECK
    return 2;
  }
};

const handleDifferentRarities = (raritiesFound) => {
  if (!raritiesFound.includes("Rare")) {
    cardSpecs[2].max = 0;
    cardSpecs[3].max = 2;
  } else if (!raritiesFound.includes("Uncommon")) {
    cardSpecs[1].max = 0;
    cardSpecs[0].max = 8;
  }
};

let cardSpecs = [
  {
    rarity: "Common",
    cardsFound: [],
    max: 5,
  },
  {
    rarity: "Uncommon",
    cardsFound: [],
    max: 3,
  },
  {
    rarity: "Rare",
    cardsFound: [],
    max: 1,
  },
  {
    rarity: "Other Rare",
    cardsFound: [],
    max: 1,
  },
];

export default validateID;
