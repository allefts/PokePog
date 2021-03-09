import React from "react";
import { Card, CardMedia, CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledCard = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: #1e9f43;
    cursor: pointer;
    width: 100%;
    height: 100%
    display: flex;
    justify-content: center;
    align-items center;
    font-family: LemonMilk;
    opacity: 0;
    transition: all .8s ease;
    padding: 1rem;

    & > *{
      transform: translateY(20px);
      transition: transform .8s;
    }

    &:hover > *{
      transform: translateY(0);
    }

    &:hover{
      opacity: 1;
    }

    .cardHoverHeader{

    }
`;

const useStyles = makeStyles({
  card: {
    position: "relative",
    background: "transparent",
    width: "375px",
    height: "200px",
    outline: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "none",
    backgroundColor: "rgba(63, 81, 181, 0.1)",
    transition: "all .5s ease",
    "&:hover": {
      transform: "scaleX(1.1) scaleY(1.1)",
      backgroundColor: "#1e9f43",
    },
  },
  cardAction: {
    width: "100%",
    height: "100%",
    margin: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardMedia: {
    width: "60%",
  },
});

const SetCards = ({ setImage, setTitle, setId }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Router>
      <Card
        className={classes.card}
        onClick={() => history.push(`/sets/${setId}`)}
      >
        <CardActionArea className={classes.cardAction}>
          <CardMedia
            className={classes.cardMedia}
            component="img"
            image={setImage}
            title={setTitle}
          />
        </CardActionArea>
        <StyledCard>
          <h2 className="cardHoverHeader">{setTitle}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            rerum quis tempore et quos inventore possimus tenetur ex ducimus
            soluta.
          </p>
        </StyledCard>
      </Card>
    </Router>
  );
};

export default SetCards;
