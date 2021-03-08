import React from "react";
import styled from "styled-components";
import Footer from "./Footer";

const StyledHomeDescription = styled.div`
  position: relative;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin: 0 auto;

  .openBtn {
    font-family: LemonMilk;
    padding: 10px 20px;
    margin: 0;
    cursor: pointer;
    background: rgba(30, 159, 67, 0.6);
    color: black;
    border-bottom: 4px solid black;
    transition: all 0.5ms;
    text-decoration: none;
    &:hover {
      border-bottom: 4px solid white;
    }
  }

  .openPackDescription {
    width: 90%;
    padding: 2rem;
    font-family: Montserrat;
    text-align: center;
    font-size: 1.25rem;
    color: white;
  }

  @media (max-width: 800px) {
    justify-content: flex-start;

    .openPackDescription {
      padding: 0;
    }
  }

  @media (max-width: 600px) {
    .openBtn {
      padding: 5px 10px;
    }
    .openPackDescription {
      font-size: 1rem;
    }
  }
`;

const HomeDescription = () => {
  return (
    <StyledHomeDescription>
      <p className="openPackDescription">
        Simulate opening packs all the way from the Base set until the most
        recent Shining Fates set. Each pack receives <span>5 Common</span>,{" "}
        <span style={{ color: "#3387ff" }} className="uncommon">
          3 Uncommon
        </span>
        , <span style={{ color: "#8c6fbf" }}>1 Rare</span> and{" "}
        <span style={{ color: "#c7c520" }}>1 Super Rare</span> card. GOOD LUCK!
      </p>
      <h2 className="openPackHeader">
        <a href="/sets" className="openBtn">
          Open Packs
        </a>
      </h2>
      <Footer />
    </StyledHomeDescription>
  );
};

export default HomeDescription;
