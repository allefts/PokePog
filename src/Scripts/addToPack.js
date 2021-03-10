const addToPack = (
  entireSet,
  rarity,
  cardsFound,
  max,
  maybeShiny,
  energyFound
) => {
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
      !energyFound &&
      entireSet[randomNum].supertype === "Energy" &&
      entireSet[randomNum].rarity === rarity
    ) {
      energyFound = true;
      cardsFound.push(entireSet[randomNum]);
    } else if (
      //CARD IS SAME RARITY AS THE ONE ITS LOOKING FOR ADD TO PACK
      entireSet[randomNum].rarity === rarity &&
      !cardsFound.includes(entireSet[randomNum])
    ) {
      cardsFound.push(entireSet[randomNum]);
    }
  }
  return cardsFound;
};

// module.exports = { addToPack };
export default addToPack;
