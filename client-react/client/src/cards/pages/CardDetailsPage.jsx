import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import CardFeedback from "../components/card/CardFeedback";
import { changeLikeStatus, deleteCard } from "../services/cardService";

const CardDetailsPage = () => {
  const { id } = useParams();
  const { pending, error, card, handleGetCard } = useCards();
  const subTitle = `Here you can find details about your selected card number:${id}`;

  const navigate = useNavigate()
  const onLike = async (cardId) => {
    const data = await changeLikeStatus(cardId);
    console.log(data)
   
  }
  const onDelete = async (cardId) => {
    const data = await deleteCard(cardId);
    console.log(data)
 
    
  }
  const onEdit = (cardId) =>{
    
    navigate("/card-edit/"+cardId)
  }

  useEffect(() => {
    handleGetCard(id);
  }, []);
  
  return (
    <Container maxWidth="lg">
      <PageHeader title="Card Details" subtitle={subTitle} />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
    
        <CardFeedback
          onEdit={onEdit}
          onLike={onLike}
          onDelete={onDelete}
          pending={pending}
          card={card}
          error={error}
        />
      </Container>
    </Container>
  );
};

export default CardDetailsPage;
