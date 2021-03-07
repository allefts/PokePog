import React from "react";
import styled from "styled-components";

const StyledSetNav = styled.div`
  .setsTitle {
    font-family: "LemonMilk", "Helvetica", sans-serif;
    font-size: 2rem;
    text-decoration: none;
    margin: 0 0 0 20px;
    font-weight: 400;
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
      <h1 className="setsTitle">Sets</h1>
    </StyledSetNav>
  );
};

export default SetHeader;
