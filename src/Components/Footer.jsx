import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  .footer-wrapper {
    margin-bottom: -50px;
    width: 100%;
    height: 8rem;
    background-color: rgba(30, 159, 67, 1);
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;

    .pokemon-api,
    .myName {
      cursor: pointer;
      transition: all 0.5ms ease;
      color: #262c45;
      font-weight: bold;
      text-decoration: none;

      &:hover{
        color: white;
      }
      
      }
    }
  }


  .footer-description {
    font-family: Montserrat;
    font-size: 1.2em;
    margin-left: 5px;
  }

  .pokepax {
    color: white;
  }

  @media (max-width: 1600px) {
    .footer-description {
      font-size: 15px;
    }
  }

  @media (max-width: 1200px) {
    .footer-wrapper {
      flex-flow: column;
      justify-content: center;
      height: 6rem;
    }
    .footer-description {
      font-size: 10px;
    }
  }

  @media (max-width: 800px) {
    .footer-wrapper {
      height: 8rem;
    }

    .credits {
      text-align: center;
      width: 100%;
    }

    .footer-description {
      // font-size: 10px;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-wrapper">
        <p className="footer-description">
          <span className="pokepax">POKEPAX</span> by:{" "}
          <a
            href="https://portfolio-mh8zk.ondigitalocean.app/"
            target="_blank"
            rel="noreferrer"
            className="myName"
          >
            Allef Soares
          </a>
        </p>
        <div className="credits">
          <p className="footer-description">
            All data made available by the{" "}
            <a
              className="pokemon-api"
              target="_blank"
              rel="noreferrer"
              href="https://pokemontcg.io/"
            >
              Pokémon TCG API
            </a>
          </p>
          <p className="footer-description">
            This website is not produced, endorsed, supported, or affiliated
            with Nintendo or The Pokémon Company.
          </p>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
