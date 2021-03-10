import React from "react";
import SetSection from "./SetSection";
import allSets from "../Sets/allSets";
import styled from "styled-components";

const StyledMainWrapper = styled.div``;

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

  return <StyledMainWrapper>{displaySetTitles}</StyledMainWrapper>;
};

export default MainSetContent;
