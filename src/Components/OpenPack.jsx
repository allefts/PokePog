import React, { useState, useEffect } from "react";
import backOfCard3 from "../Assets/backOfCard3.png";
import styled from "styled-components";
// import Nav from "./Nav";

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

const OpenPack = ({ pack }) => {
  const [cardFronts, setCardFronts] = useState([]);

  useEffect(() => {
    setCardFronts(pack);
    // console.log(pack);
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
    <StyledPackOpening>
      {/* <div className="packNav">
        <h1 className="packNavHeader">PACKS</h1>
      </div> */}
      <div className="packOpeningHeader">
        <div className="card-container">{renderCards}</div>
      </div>
    </StyledPackOpening>
  );
};

export default OpenPack;
