import React from "react";
import { Container } from "@material-ui/core";
import SetCards from "./SetCards";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  setSection: {
    width: "100%",
    minHeight: "1000px",
  },
  title: {
    margin: "0",
    textAlign: "center",
    fontFamily: "PokemonFontSolid",
    color: "white",
    letterSpacing: "10pt",
    fontSize: "3rem",
  },
  line: {
    textAlign: "center",
    margin: "10px auto 20px auto",
    width: "80%",
    border: "2px solid yellow",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "wrap row",
    alignItems: "center",
  },
});

const SetSection = ({ setTitle, setSets }) => {
  const classes = useStyles();

  const renderCards = setSets.map((set, index) => {
    return (
      <SetCards
        setImage={set.image}
        setTitle={set.title}
        key={set.title}
        setId={set.id}
      />
    );
  });
  return (
    <div>
      <Container className={classes.setSection} maxWidth="xl">
        <h1 className={classes.title}>{setTitle}</h1>
        <div className={classes.line}></div>
        <div className={classes.cardContainer}>{renderCards}</div>
      </Container>
    </div>
  );
};

export default SetSection;
