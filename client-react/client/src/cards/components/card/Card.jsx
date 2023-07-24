import React from "react";
import { Card, CardActionArea } from "@mui/material";
import cardType from "../../models/types/cardType";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { func } from "prop-types";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import { getUser } from "../../../users/services/localStorageService";

const CardComponent = ({ card, onLike, onDelete, onEdit }) => {
  const navigate = useNavigate();

  const userFromToken = getUser()
  const isLiked = card.likes.includes(userFromToken?._id);
  const displayTrash = userFromToken?.isAdmin;

  return ( 
    <Card sx={{ maxWidth: 280 }}>
      <CardActionArea onClick={() => navigate(`${ROUTES.CARD_INFO}/${card._id}`)} >
        <CardHead image={card.image} />
        <CardBody card={card} />
      </CardActionArea>
      <CardActionBar
        displayTrash={displayTrash}
        isLiked={isLiked}
        onLike={onLike}
        onDelete={onDelete}
        onEdit={onEdit}
        cardId={card._id}
      />
    </Card>
  );
};

CardComponent.propTypes = {
  card: cardType.isRequired,
  onLike: func.isRequired,
  onDelete: func.isRequired,
  onEdit: func.isRequired,
};

export default CardComponent;
