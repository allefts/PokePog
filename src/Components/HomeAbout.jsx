import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import homeBG from "../Assets/HomeBg.png";

const StyledHomePage = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .homeHeader {
    font-family: LemonMilk;
    color: black;
    background-color: rgba(30, 159, 67, 0.8);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    width: 50%;
    padding: 20px 0;
    text-align: center;
  }

  .bgImage {
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 100%;
    background-image: url(${homeBG});
  }

  .pokePog {
    color: white;
  }

  .homeHeaderTitle {
    font-size: 4.5rem;
    margin: 0;
  }

  .homeheadercatch {
    font-size: 1.5rem;
  }

  @media (max-width: 1700px) {
    .homeHeader {
      width: 100%;
    }
    .homeHeaderTitle {
      font-size: 3rem;
    }
  }

  @media (max-width: 620px) {
    .homeHeaderTitle {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 969px) {
    .bgImage {
      background-size: 80%;
    }
  }
`;

// const useStyles = makeStyles({
//   banner: {
//     height: "90%",
//     width: "100%",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   homeHeader: {
//     fontFamily: "LemonMilk",
//     color: "black",
//     backgroundColor: " rgba(30, 159, 67, .8)",
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%,-50%)",
//     zIndex: "2",
//     width: "50%",
//     padding: "20px 0",
//     textAlign: "center",
//   },
//   bgImage: {
//     backgroundSize: "50%",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center center",
//     width: "100%",
//     height: "100%",
//   },
//   pokePog: {
//     color: "white",
//   },
//   homeHeaderTitle: {
//     fontSize: "4.5rem",
//     margin: "0",
//   },
//   homeHeaderCatch: {
//     fontSize: "1.5rem",
//   },
// });

const HomeAbout = () => {
  // const classes = useStyles();
  return (
    <StyledHomePage>
      {/* <div className="banner"> */}
      <div
        className="bgImage"
        style={{ backgroundImage: `url(${homeBG})` }}
      ></div>
      <div className="homeHeader">
        <h1 className="homeHeaderTitle">
          Welcome To <span className="pokePog">POKEPAX!</span>
        </h1>
        <h3 className="homeHeaderCatch">
          Open your favorite packs as many times as you wish!
        </h3>
      </div>
      {/* </div> */}
    </StyledHomePage>
  );
};

export default HomeAbout;
