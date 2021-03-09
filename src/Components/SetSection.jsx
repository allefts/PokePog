import React from "react";
import { Grid } from "@material-ui/core";
import SetCards from "./SetCards";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  something: {
    width: "100%",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  setSection: {
    width: "100%",
    minHeight: "500px",
    margin: "2rem 0",
  },
  title: {
    margin: "0",
    textAlign: "center",
    padding: "1rem",
    fontFamily: "Montserrat",
    color: "white",
    fontSize: "3rem",
  },
  line: {
    textAlign: "center",
    // margin: "10px auto 20px auto",
    width: "80%",
    margin: "0 auto",
    border: "2px solid  rgba(30, 159, 67, 1);",
  },
  cardContainer: {
    // display: "grid",
    // gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    // gridGap: "15px",
    // alignItems: "center",
    // alignContent: "center",
    // justifyItems: "center",
  },
  SetTitleWrapper: {
    paddingTop: "2rem",
  },
});

const SetSection = ({ setTitle, setSets }) => {
  const classes = useStyles();

  const renderCards = setSets.map((set, index) => {
    return (
      <Grid
        className={classes.gridItem}
        item
        xs={12}
        sm={12}
        md={6}
        lg={4}
        xl={4}
        key={set.title}
      >
        <SetCards
          setImage={set.image}
          setTitle={set.title}
          key={set.title}
          setId={set.id}
        />
      </Grid>
    );
  });
  return (
    <div className={classes.something}>
      <div className={classes.SetTitleWrapper}>
        <div className={classes.line}></div>
        <h1 className={classes.title}>{setTitle}</h1>
      </div>
      <Grid className={classes.gridContainer} container spacing={3}>
        {renderCards}
      </Grid>
    </div>
  );
};

export default SetSection;
