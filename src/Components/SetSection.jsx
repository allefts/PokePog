import React from "react";
import { Container } from "@material-ui/core";
import SetCards from "./SetCards";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  setSection: {
    width: "100%",
    minHeight: "500px",
    margin: "2rem 0",
  },
  title: {
    margin: "0",
    textAlign: "center",
    fontFamily: "LemonMilk",
    // color: "yellow",
    color: "rgba(30, 159, 67, 1)",
    letterSpacing: "5pt",
    fontSize: "3rem",
  },
  line: {
    textAlign: "center",
    margin: "10px auto 20px auto",
    width: "100%",
    border: "3px solid white",
  },
  cardContainer: {
    // display: "flex",
    // justifyContent: "center",
    // flexFlow: "wrap row",
    // alignItems: "center",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
    gridGap: "40px",
    alignItems: "center",
    justifyItems: "center",
  },
  SetTitleWrapper: {
    padding: "3rem",
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
        <div className={classes.SetTitleWrapper}>
          <div className={classes.line}></div>
          <h1 className={classes.title}>{setTitle}</h1>
        </div>
        <div className={classes.cardContainer}>{renderCards}</div>
      </Container>
    </div>
  );
};

export default SetSection;
