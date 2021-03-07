import React from "react";
import { Card, CardMedia, CardActionArea } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  card: {
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
      // backgroundColor: "rgba(245, 232, 111, 0.8);",
      backgroundColor: "#1e9f43",
    },
  },
  cardAction: {
    width: "100%",
    height: "100%",
    margin: "0",
  },
  cardMedia: {
    width: "60%",
    margin: " 0 auto",
  },
});

const SetCards = ({ setImage, setTitle, setId }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Router>
      <div>
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
        </Card>
      </div>
    </Router>
  );
};

export default SetCards;
