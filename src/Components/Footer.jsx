import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  .footer-wrapper {
    margin: 0
    width: 100%;
    height: 4rem;
    background-color: rgba(30, 159, 67, 1);
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: center;
    
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-wrapper"></div>;
    </StyledFooter>
  );
};

export default Footer;
