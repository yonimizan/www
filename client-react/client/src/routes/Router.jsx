import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../cards/pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import SignUpPage from "../users/pages/SignUpPage";
import LoginPage from "../users/pages/LoginPage";
import CardDetailsPage from "../cards/pages/CardDetailsPage";
import CardsPageFavorites from "../cards/pages/CardsPageFavorites";
import CardEditPage from "../cards/pages/CardEditPage";
import AddCard from "../cards/pages/AddCard";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<CardsPageFavorites />} />
      <Route path={ROUTES.ADD_CARD} element={<AddCard />} />
      <Route path={`${ROUTES.CARD_EDIT}/:id`} element={<CardEditPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailsPage />} />
  
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
