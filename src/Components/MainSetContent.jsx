import React from "react";
import SetSection from "./SetSection";
import { Container } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
import allSets from "../Sets/allSets";

// const useStyles = makeStyles({});

const MainSetContent = () => {
  //   const classes = useStyles();

  const displaySetTitles = allSets.map((set, index) => {
    return (
      <SetSection
        key={set.setTitle}
        setTitle={set.setTitle}
        setSets={set.setSets}
      />
    );
  });

  return (
    <div>
      <Container maxWidth="xl">{displaySetTitles}</Container>
    </div>
  );
};

export default MainSetContent;
