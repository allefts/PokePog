/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import pokemon from "pokemontcgsdk";
const API_KEY = "06e7f442-7fef-42f2-b382-94c7e94a56e3";
pokemon.configure({ apiKey: API_KEY });

// const useStyles = makeStyles({});

const FetchCards = () => {
  //   const classes = useStyles();
  //   const [totalPrinted, setTotalPrinted] = useState(0);
  const [cardsObject, setCardsObject] = useState([]);
  const { id } = useParams();

  //   useEffect(async () => {
  //     const result = await axios(
  //       `https://api.pokemontcg.io/v2/cards?q=set.id:${id}`
  //     );
  //     lookForCards(result.totalCount, result);
  //   }, []);

  useEffect(() => {
    fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${id}`)
      .then((res) => res.json())
      .then((result) => {
        // setTotalPrinted(result.totalCount);
        // console.log(result);
        setCardsObject(lookForCards(result.totalCount, result));
      });
  }, []);

  let cardsFound = [];

  function lookForCards(totalCount, entireSet) {
    for (let i = 0; i < 10; i++) {
      let randomNum = Math.floor(Math.random() * (totalCount - 1)) + 1;
      //   console.log(randomNum);
      //   console.log(entireSet.data[randomNum].name);
      cardsFound = [
        ...cardsFound,
        {
          name: entireSet.data[randomNum].name,
          picture: entireSet.data[randomNum].images.small,
          id: i,
        },
      ];
    }
    return cardsFound;
  }

  const renderCards = cardsObject.map((card, index) => {
    return (
      <div key={card.id}>
        <h2>{card.name}</h2>
        <img src={card.picture} alt={card.name} />
        <h2>{card.image}</h2>
      </div>
    );
  });

  return (
    <div>
      {/* <h1 style={{ color: "white" }}>{totalPrinted}</h1> */}
      <div>{renderCards}</div>
    </div>
  );
};

export default FetchCards;
