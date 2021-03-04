const pokemonObj = [
  {
    name: "Pikachu",
    rarity: "Common",
  },
  {
    name: "Jigglypuff",
    rarity: "Common",
  },
  {
    name: "Palkia",
    rarity: "Rare Holo VMAX",
  },
  {
    name: "Raichu",
    rarity: "Rare",
  },
  {
    name: "Ekans",
    rarity: "Common",
  },
  {
    name: "Lucario",
    rarity: "Rare Prime",
  },
  {
    name: "Incineroar",
    rarity: "Rare Prism Star",
  },
  {
    name: "Turtwig",
    rarity: "Rare",
  },
  {
    name: "Pidgeot",
    rarity: "Common",
  },
  {
    name: "Scrafty",
    rarity: "Ultra Rare",
  },
  {
    name: "Charizard",
    rarity: "Uncommon",
  },
  {
    name: "Onyx",
    rarity: "Uncommon",
  },
  {
    name: "Clefairy",
    rarity: "Common",
  },
  {
    name: "Jolteon",
    rarity: "Uncommon",
  },
  {
    name: "Flareon",
    rarity: "Common",
  },
  {
    name: "Bob",
    rarity: "Common",
  },
  {
    name: "Machamp",
    rarity: "Common",
  },
  {
    name: "Ditto",
    rarity: "Uncommon",
  },
];

let foundCards = {
  common: 0,
  uncommon: 0,
  rare: false,
  ultraRare: false,
  foundAll: false,
};

var cardSpecs = [
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
    rarity: "Ultra Rare",
    cardsFound: [],
    max: 1,
  },
];

function findCards(rarity, cardsFound, max) {
  let randomNum;

  while (cardsFound.length !== max) {
    randomNum = Math.floor(Math.random() * (pokemonObj.length - 1)) + 1;
    if (
      pokemonObj[randomNum].rarity === rarity &&
      !cardsFound.includes(pokemonObj[randomNum].name)
    ) {
      cardsFound.push(pokemonObj[randomNum].name);
    }
  }
  console.log(cardsFound);
}

for (const chance of cardSpecs) {
  findCards(chance.rarity, chance.cardsFound, chance.max);
}

// if ((pokemonObj[randomNum].rarity.length > 8 && foundCards.ultraRare === false) || pokemonObj[randomNum].rarity === "Rare ACE") {
//   //Add Card
// }

/*
    const cards = getCardsArraySomehow();
    // the cards you are going to pull
    const stack;
    let commons=0, uncommons=0, rares=0;
    for (const card of cards){
        if (card.rarity === "Commons" && commons <= 5)
        commons++
        else if (card.rarity === "Uncommon" && commons <= 3) {
            uncommons++
            else if  (card.rarity === "Rare" && commons <= 1)
            rares++
            else continue;
            stack.push(card);
            if(stack.length >= 9) break;
        }
        */
