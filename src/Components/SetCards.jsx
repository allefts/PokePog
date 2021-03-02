import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import styled from "styled-components";

//IMAGE

const StyledCard = styled.div`
  .set-card {
    margin: 10px;
    background-color: #151828;
    color: white;
  }

  .card {
    padding: 1rem 6rem;
    height: 400px;
    width: 100%;
  }

  .card-writing {
    font-family: "Franklin Gothic Medium", "Helvetica", sans-serif;
  }

  .card-media {
    width: 400px;
  }
`;

const SetCards = ({ imageSrc, title }) => {
  return (
    <StyledCard>
      <Card className="set-card">
        <CardActionArea className="card">
          <CardMedia
            className="card-media"
            component="img"
            image={imageSrc}
            title={title}
          />
        </CardActionArea>
      </Card>
    </StyledCard>
  );
};

export default SetCards;
