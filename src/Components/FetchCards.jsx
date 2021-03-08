/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import OpenPack from "./OpenPack";

// import pokemon from "pokemontcgsdk";
// const API_KEY = "06e7f442-7fef-42f2-b382-94c7e94a56e3";
// pokemon.configure({ apiKey: API_KEY });

const StyledLoading = styled.div`
  .loading-header {
    font-size: 3rem;
    font-family: LemonMilk;
    text-align: center;
    color: rgba(30, 159, 67, 1);
  }
`;

const FetchCards = () => {
  const [cardsObject, setCardsObject] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(async () => {
    await fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${id}`)
      .then(async (res) => await res.json())
      .then((result) => {
        // console.log(result);
        setCardsObject(lookForRarity(result.totalCount, result));
      });
    setIsLoading(false);
  }, []);

  //CARD OBJECT TO LOOK THROUGH
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
  var raritiesFound = [];

  function lookForRarity(totalCount, entireSet) {
    for (const rarityOfCard of entireSet.data) {
      if (!raritiesFound.includes(rarityOfCard.rarity)) {
        raritiesFound.push(rarityOfCard.rarity);
      }
    }

    // console.log(raritiesFound);

    //IF SET DOES NOT INCLUDE RARE OR UNCOMMON WHICH SOME DON'T FOR SOME REASON
    if (!raritiesFound.includes("Rare")) {
      cardSpecs[2].max = 0;
      cardSpecs[3].max = 2;
    } else if (!raritiesFound.includes("Uncommon")) {
      cardSpecs[1].max = 0;
      cardSpecs[0].max = 8;
    } else {
      cardSpecs[0].max = 5;
      cardSpecs[1].max = 3;
      cardSpecs[2].max = 1;
      cardSpecs[3].max = 1;
    }
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

    // console.log(finishedPack);
    return finishedPack;
  }

  let energyCardFound = false;

  function findCards(entireSet, rarity, cardsFound, max) {
    let randomNum;

    while (cardsFound.length !== max) {
      randomNum = Math.floor(Math.random() * (entireSet.data.length - 1)) + 1;

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

  return (
    <StyledLoading>
      {isLoading ? (
        <h1 className="loading-header">
          LOADING YOUR <span style={{ color: "white" }}>POKEPACK</span>...
        </h1>
      ) : (
        <OpenPack pack={cardsObject} />
      )}
    </StyledLoading>
  );
};

export default FetchCards;
