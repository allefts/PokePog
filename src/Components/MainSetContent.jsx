import React from "react";
import SetSection from "./SetSection";
import { Container } from "@material-ui/core";
import allSets from "../Sets/allSets";

const MainSetContent = () => {
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
