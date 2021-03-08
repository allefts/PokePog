import React from "react";
import SetSection from "./SetSection";
import { Container } from "@material-ui/core";
import allSets from "../Sets/allSets";
import styled from "styled-components";
import Footer from "./Footer";

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

  return (
    <StyledMainWrapper>{displaySetTitles}</StyledMainWrapper>
    // {/* <div className="main" maxWidth="xl"> */}
    // {/* </div> */}
  );
};

export default MainSetContent;
