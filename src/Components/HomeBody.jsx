import React from "react";
import { Container } from "@material-ui/core";
import styled from "styled-components";
import SetCards from "./SetCards";

import POKEMON_SETS from "../sets";

const StyledHomeBody = styled.div`
  .top-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: wrap row;
  }
`;

const HomeBody = () => {
  return (
    <StyledHomeBody>
      <Container className="top-container" maxWidth="xl">
        {POKEMON_SETS.map((set, index) => {
          return <SetCards imageSrc={set.image} title={set.title} />;
        })}
      </Container>
    </StyledHomeBody>
  );
};

export default HomeBody;
