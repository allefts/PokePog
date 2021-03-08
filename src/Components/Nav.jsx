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
    cursor: pointer;
    margin: 0 1rem;
    &:hover {
      color: white;
    }
  }

  .divider {
    font-size: 2rem;
    font-family: LemonMilk;
  }

  .navbar {
    height: 4rem;
    // position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    background-color: rgba(30, 159, 67, 1);
    color: black;
    box-shadow: none;
  }
`;

const Nav = ({ title, position }) => {
  return (
    <StyledNav>
      <AppBar className="navbar" position="static">
        <Toolbar variant="dense">
          <a className="title" href="/">
            {title}
          </a>
          <p className="divider">/</p>
          <a className="title" href="/sets">
            Sets
          </a>
        </Toolbar>
      </AppBar>
    </StyledNav>
  );
};

export default Nav;
