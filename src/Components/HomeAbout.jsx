import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import homeBG from "../Assets/HomeBg.png";

const useStyles = makeStyles({
  wrapper: {
    minHeight: "95vh",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  homeHeader: {
    width: "85%",
    position: "relative",
    zIndex: "2",
    fontFamily: "LemonMilk",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexFlow: "column",
    color: "rgba(30, 159, 67, 1)",
  },
  backgroundImage: {
    position: "absolute",
    width: "70%",
    margin: "0 auto",
    height: "auto",
    opacity: "0.15",
    zIndex: "1",
  },
  pokePog: {
    color: "white",
  },
  homeHeaderTitle: {
    fontSize: "4.5rem",
    margin: "1rem",
  },
  homeHeaderCatch: {
    fontSize: "1.5rem",
    margin: "0",
  },
});

const HomeAbout = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="xl" className={classes.wrapper}>
        <div className={classes.homeHeader}>
          <h1 className={classes.homeHeaderTitle}>
            Welcome To <span className={classes.pokePog}>PokePogChamp</span>
          </h1>
          <h3 className={classes.homeHeaderCatch}>
            Open your favorites packs as many times as you wish!
          </h3>
          <img
            className={classes.backgroundImage}
            src={homeBG}
            alt="25th Anniversary Pokemon"
          />
        </div>
      </Container>
    </div>
  );
};

export default HomeAbout;
