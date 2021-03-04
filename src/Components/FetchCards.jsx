/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

// import pokemon from "pokemontcgsdk";
// const API_KEY = "06e7f442-7fef-42f2-b382-94c7e94a56e3";
// pokemon.configure({ apiKey: API_KEY });

// const useStyles = makeStyles({});

const FetchCards = () => {
  //   const classes = useStyles();
  //   const [totalPrinted, setTotalPrinted] = useState(0);
  const [cardsObject, setCardsObject] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${id}`)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setCardsObject(lookForRarity(result.totalCount, result));
      });
  }, []);

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
      rarity: "SUPER DUPER RARE",
      cardsFound: [],
      max: 1,
    },
  ];

  var finishedPack = [];

  function lookForRarity(totalCount, entireSet) {
    for (const setRarity of cardSpecs) {
      finishedPack = finishedPack.concat(
        findCards(
          entireSet,
          setRarity.rarity,
          setRarity.cardsFound,
          setRarity.max
        )
      );
    }

    console.log(finishedPack);

    // for (let i = 0; i < 10; i++) {
    //   let randomNum = Math.floor(Math.random() * (totalCount - 1)) + 1;
    //   //   console.log(randomNum);
    //   //   console.log(entireSet.data[randomNum].name);
    //   cardsFound = [
    //     ...cardsFound,
    //     {
    //       name: entireSet.data[randomNum].name,
    //       picture: entireSet.data[randomNum].images.small,
    //       id: i,
    //     },
    //   ];
    // }
    return finishedPack;
  }

  var energyCardFound = false;
  function findCards(entireSet, rarity, cardsFound, max) {
    let randomNum;

    while (cardsFound.length !== max) {
      randomNum = Math.floor(Math.random() * (entireSet.data.length - 1)) + 1;

      // var foundEnergy = false;

      // if (
      //   entireSet.data[randomNum].supertype === "Energy" &&
      //   foundEnergy !== true
      // ) {
      //   foundEnergy = true;
      // }

      if (
        //CHECKS IF ITS A SUPER RARE, IF IT IS PUSH IT TO ARRAY
        rarity === "SUPER DUPER RARE" &&
        (entireSet.data[randomNum].rarity.length > 8 ||
          entireSet.data[randomNum].rarity === "Rare ACE") //CHECKS FOR ANY RARITY THAT IS MORE THAN 8 CHARS LONG AND MAYBE A RARE ACE
      ) {
        cardsFound.push(entireSet.data[randomNum]);
      } else if (
        //IF CARD IS ENERGY CARD, PUSH TO
        entireSet.data[randomNum].supertype === "Energy" && //CHECKS IF CARD IS ENERGY AND ONE HAS NOT BEEN FOUND YET
        energyCardFound === false
      ) {
        energyCardFound = true;
        cardsFound.push(entireSet.data[randomNum]); //PUSHES TO ARRAY AND SETS ENERGY CARD FOUND TO TRUE SO NO MORE ENERGY CARDS
      } else if (
        //CHECKS IF RARITY OF CARD IS EQUAL TO CURRENT OBJECT RARITY, IF SO AND CARD HAS NOT BEEN FOUND YET, PUSH TO ARRAY
        entireSet.data[randomNum].rarity === rarity && //CHECKS FOR SAME RARITY
        !cardsFound.includes(entireSet.data[randomNum]) && //IF CARD IS ALREADY IN ARRAY, DONT PUSH
        entireSet.data[randomNum].supertype !== "Energy" //MAKES SURE TO NOT ADD MORE THAN 1 ENERGY
      ) {
        cardsFound.push(entireSet.data[randomNum]);
      }
    }
    // console.log(cardsFound);
    return cardsFound;
  }

  const renderCards = cardsObject.map((card, index) => {
    return (
      <div key={card.id}>
        <h2>{card.name}</h2>
        <img src={card.images.small} alt={card.name} />
        <h2>{card.image}</h2>
      </div>
    );
  });

  return (
    <div>
      <div>{renderCards}</div>
    </div>
  );
};

export default FetchCards;
