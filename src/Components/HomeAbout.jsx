import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import homeBG from "../Assets/HomeBg.png";

const useStyles = makeStyles({
  banner: {
    height: "90%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  homeHeader: {
    fontFamily: "LemonMilk",
    color: "black",
    backgroundColor: " rgba(30, 159, 67, .8)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: "2",
    width: "50%",
    padding: "20px 0",
    textAlign: "center",
  },
  bgImage: {
    backgroundSize: "50%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: "100%",
    height: "100%",
  },
  pokePog: {
    color: "white",
  },
  homeHeaderTitle: {
    fontSize: "4.5rem",
    margin: "0",
  },
  homeHeaderCatch: {
    fontSize: "1.5rem",
  },
});

const HomeAbout = () => {
  const classes = useStyles();
  return (
    <div className={classes.banner}>
      {/* <Container maxWidth="xl" className={classes.wrapper}> */}
      <div
        className={classes.bgImage}
        style={{ backgroundImage: `url(${homeBG})` }}
      ></div>
      <div className={classes.homeHeader}>
        <h1 className={classes.homeHeaderTitle}>
          Welcome To{" "}
          <span className={classes.pokePog}>
            POKEPAX!
            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Architecto, provident? */}
          </span>
        </h1>
        <h3 className={classes.homeHeaderCatch}>
          Open your favorite packs as many times as you wish!
        </h3>
        {/* <img
            className={classes.backgroundImage}
            src={homeBG}
            alt="25th Anniversary Pokemon"
          /> */}
      </div>
      {/* </Container> */}
    </div>
  );
};

export default HomeAbout;
