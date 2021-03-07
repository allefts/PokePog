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
    border-bottom: 4px solid white;
    transition: all 0.5ms;
    text-decoration: none;
    &:hover {
      border-bottom: 4px solid black;
    }
  }

  .openPackDescription {
    width: 80%;
    padding: 2rem;
    font-family: Montserrat;
    text-align: center;
    font-size: 1.25rem;
    color: white;
  }
`;

const HomeDescription = () => {
  return (
    <div>
      <StyledHomeDescription>
        <p className="openPackDescription">
          Simulate opening packs all the way from the Base set until the most
          recent Shining Fates set. Each pack receives 5 Common , 3 Uncommon, 1
          Rare and 1 Super Rare card. GOOD LUCK!
        </p>
        <h2 className="openPackHeader">
          <a href="/sets" className="openBtn">
            Open Packs
          </a>
        </h2>
        <Footer />
      </StyledHomeDescription>
    </div>
  );
};

export default HomeDescription;
