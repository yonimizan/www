import {  Grid } from "@mui/material";
import React from "react";
import CardComponent from "./card/Card";
import { arrayOf } from "prop-types";
import cardType from "../models/types/cardType";
import {changeLikeStatus, editCard, deleteCard} from "../services/cardService"
import { useNavigate } from "react-router-dom";


const Cards = ({cards, refreshCards }) => {
const navigate = useNavigate()
  const onLike = async (cardId) => {
    const data = await changeLikeStatus(cardId);
    console.log(data)
    refreshCards()
  }
  const onDelete = async (cardId) => {
    const data = await deleteCard(cardId);
    console.log(data)
    refreshCards()
    
  }
  const onEdit = (cardId) =>{
    console.log("adsdfasdasd")
    navigate("/card-edit/"+cardId)
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
};

export default Cards;
