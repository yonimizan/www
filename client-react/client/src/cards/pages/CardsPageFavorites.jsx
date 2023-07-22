import { Container } from "@mui/material";
import React from "react";
import PageHeader from "../../components/PageHeader";
import { useEffect } from "react";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import { getUser } from "../../users/services/localStorageService";

const CardsPageFavorites = () => {
  const { pending, error, cards, handleGetCards } = useCards();

  useEffect(() => {
    handleGetCards();
  }, []);

  return (
    <Container>
      <PageHeader
        title="Favorites Page"
        subtitle="On this page you can find all favorite cards from all categories"
      />
      <CardsFeedback
        cards={cards?.filter(card => {
          const userFromToken = getUser()
          const isLiked = card.likes.includes(userFromToken._id)
          return isLiked
        })}
        error={error}
        pending={pending}
        refreshCards={handleGetCards}
        onDelete={() => {}}
      />
    </Container>
  );
};

export default CardsPageFavorites;
