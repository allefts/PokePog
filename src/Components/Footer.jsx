import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  .footer-wrapper {
    margin: 0
    width: 100%;
    height: 4rem;
    background-color: rgba(30, 159, 67, 1);
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    align-items: center;

    .footer-description{
      font-family: Montserrat;
      font-size: 1.2em;
      margin: 0;
    }

    .pokemon-api{
      cursor: pointer;
      color: white;

      a{
        text-decoration: none;
        color: inherit;
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-wrapper">
        <p className="footer-description">
          All data made available by the{" "}
          <span className="pokemon-api">
            {" "}
            <a target="_blank" rel="noreferrer" href="https://pokemontcg.io/">
              Pokémon TCG API
            </a>
          </span>
        </p>
        <p className="footer-description">
          This website is not produced, endorsed, supported, or affiliated with
          Nintendo or The Pokémon Company.
        </p>
      </div>
      ;
    </StyledFooter>
  );
};

export default Footer;
