/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import backOfCard3 from "../Assets/backOfCard3.png";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import validateID from "../Scripts/fetchSortCards";

// import Nav from "./Nav";

const StyledLoading = styled.div`
  .loading-header {
    font-size: 3rem;
    font-family: LemonMilk;
    text-align: center;
    color: rgba(30, 159, 67, 1);
  }
`;

const StyledPackOpening = styled.div`
  .packOpeningHeader {
    height: 100vh;
    margin-top: 2rem;
  }

  .packNav {
    height: 4rem;
    display: flex;
    align-items: center;
    background: #1e9f43;
  }

  .packNavHeader {
    margin-left: 20px;
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(358px, 1fr));
    grid-gap: 10px;
    position: relative;
  }

  .card {
    width: 280px;
    height: 400px;
    margin: 0 auto;
    // position: relative;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    transform-style: preserve-3d;
    border-radius: 10px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transition: all 1.5s ease;
  }

  .flipped {
    transform: rotateY(180deg);
  }

  .frontOfCard {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    backface-visibility: hidden;
    overflow: hidden;
    background: #ffc728;
    color: #000;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    transform: rotateY(180deg);
  }

  .backOfCard {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    backface-visibility: hidden;
    overflow: hidden;
    background: #fafafa;
    color: #333;
    text-align: center;
    background-image: url(${backOfCard3});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    transition: all 1s ease;
    &:hover {
      //   box-shadow: 0px 5px 25px 15px #3387ff;
      //   box-shadow: 0px 5px 25px 15px #8c6fbf;
      //   box-shadow: 0px 5px 25px 15px #c7c520;
      //   box-shadow: 0px 5px 25px 25px #efeddd;
      //   transform: scaleX(1.01) scaleY(1.01);
    }
  }
`;

const StyledCard = styled.div`
  width: 358px;
  height: 497px;
  position: relative;
  // position: absolute;
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, 50%);
  transform-style: preserve-3d;
  border-radius: 20px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: all 1.5s ease;

  .backOfCard{
      &:hover {
        box-shadow: ${(props) => {
          if (props.rarity === "Common") {
            return "0px 5px 25px 15px #efeddd";
          } else if (props.rarity === "Uncommon") {
            return "0px 5px 25px 15px #3387ff";
          } else if (props.rarity === "Rare") {
            return "0px 5px 25px 20px #8c6fbf";
          } else {
            return "0px 5px 25px 20px #c7c520";
          }
        }}
  }
`;

const allCards = document.getElementsByClassName("card");

const OpenPack = () => {
  const [cardFronts, setCardFronts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(async () => {
    await validateID(id).then((res) => {
      setCardFronts(res);
    });
    setIsLoading(false);

    // await fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${id}`)
    //   .then(async (res) => await res.json())
    //   .then((result) => {
    //     // console.log(result);
    //     setCardsObject(lookForRarity(result.totalCount, result));
    //   });

    // setCardsObject(validateID(id));
  }, []);

  let raritiesInPack = [];

  const handleCardFlip = (index) => {
    if (!allCards[index].classList.contains("flipped")) {
      allCards[index].classList.toggle("flipped");
    }
  };

  const renderCards = cardFronts.map((cardFront, index) => {
    raritiesInPack.push(cardFront.rarity);

    return (
      <StyledCard
        key={cardFront.name}
        className="card"
        onClick={() => {
          handleCardFlip(index);
        }}
        rarity={cardFront.rarity}
      >
        <div className="backOfCard"></div>
        <div
          className="frontOfCard"
          style={{ backgroundImage: `url(${cardFront.images.small})` }}
        ></div>
        {/* </div> */}
      </StyledCard>
    );
  });

  return (
    <StyledLoading>
      {isLoading ? (
        <h1 className="loading-header">
          LOADING YOUR <span style={{ color: "white" }}>POKEPACK</span>...
        </h1>
      ) : (
        <StyledPackOpening>
          <div className="packOpeningHeader">
            <div className="card-container">{renderCards}</div>
          </div>
        </StyledPackOpening>
      )}
    </StyledLoading>
  );
};

export default OpenPack;
