import React, { useState, useEffect } from "react";
import backOfCard3 from "../Assets/backOfCard3.png";
import styled from "styled-components";
import Nav from "./Nav";

const StyledPackOpening = styled.div`
  .packOpeningHeader {
    height: 100vh;
  }

  .packNav {
    padding: 2rem;
    background: #1e9f43;
  }

  .packNavHeader {
    margin: 0;
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(358px, 1fr));
    grid-gap: 10px;
  }

  .card {
    width: 358px;
    height: 497px;
    position: relative;
    border-radius: 10px;
    transform-style: preserve-3d;
    border-radius: 20px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    transition: all 1s ease;
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
  }
`;

const OpenPack = ({ pack }) => {
  const [cardFronts, setCardFronts] = useState([]);
  const [isFlipped, setFlipCard] = useState(false);

  useEffect(() => {
    setCardFronts(pack);
  }, []);

  const renderCards = cardFronts.map((cardFront, index) => {
    return (
      <div
        className={!isFlipped ? `card` : `card flipped`}
        onClick={() => {
          setFlipCard(!isFlipped);
        }}
      >
        <div className="backOfCard"></div>
        <div
          className="frontOfCard"
          style={{ backgroundImage: `url(${cardFront.images.small})` }}
        ></div>
      </div>
    );
  });

  return (
    <StyledPackOpening>
      <div className="packNav">
        <h1 className="packNavHeader">
          FUCKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
        </h1>
      </div>
      <div className="packOpeningHeader">
        <div className="card-container">{renderCards}</div>
      </div>
    </StyledPackOpening>
  );
};

export default OpenPack;
