/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import styled from "styled-components";

const StyledNav = styled.div`
  .title {
    font-family: "LemonMilk", "Helvetica", sans-serif;
    font-size: 2rem;
    text-decoration: none;
    color: inherit;
  }

  .navbar {
    height: 5rem;
    display: flex;
    justify-content: center;
    // background-color: rgba(30, 159, 67, 1);
    background-color: transparent;
    box-shadow: none;
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <AppBar className="navbar" position="static">
        <Toolbar variant="dense">
          <a className="title">POKEPOGCHAMP</a>
        </Toolbar>
      </AppBar>
    </StyledNav>
  );
};

export default Nav;
