import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const StyledSetNav = styled.div`
  .setsTitle {
    font-family: "LemonMilk", "Helvetica", sans-serif;
    font-size: 2rem;
    text-decoration: none;
    margin: 0 0 0 20px;
    font-weight: 400;
    color: inherit;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }

  display: flex;
  align-items: center;
  height: 4rem;
  width: 100%;
  background-color: #1e9f43;
`;

const SetHeader = () => {
  return (
    <StyledSetNav>
      <Nav title={"POKEPAX"} />
      {/* <h1>
        <a className="setsTitle" href="/">
          Sets
        </a>
      </h1> */}
    </StyledSetNav>
  );
};

export default SetHeader;
