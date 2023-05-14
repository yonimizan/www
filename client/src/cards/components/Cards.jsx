import { Grid, Typography } from "@mui/material";
import React from "react";
import CardComponent from "./card/Card";
import { arrayOf } from "prop-types";
import cardType from "../models/types/cardType";

const Cards = ({cards}) => {

  const onLike = (cardId) => console.log(`you liked card no:${cardId}`);
  const onDelete = (cardId) => console.log(`you deleted card no:${cardId}`);
  const onEdit = (cardId) => console.log(`you edited card no:${cardId}`);

  if (!cards.length) {
    return <Typography m={2}>Oops.. It Seems there are nor cards</Typography>;
  }

  return (
    <Grid container spacing={2} pb={2}>
      {cards.map((card) => (
        <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
          <CardComponent
            onLike={onLike}
            onDelete={onDelete}
            onEdit={onEdit}
            card={card}
          />
        </Grid>
      ))}
    </Grid>
  );
};

Cards.propTypes = {
  cards: arrayOf(cardType).isRequired,
}

export default Cards;
