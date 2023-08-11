import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import Form from "../../forms/components/Form";
import useForm from "../../forms/hooks/useForm";
import cardSchema from "../models/joi-schema/cardSchema";
import Input from "../../forms/components/Input";
import { editCard } from "../services/cardService";


const CardEditPage = () => {
  const { id } = useParams();
  const { card, handleGetCard } = useCards();

  const navigate = useNavigate()
  useEffect(() => {
    handleGetCard(id);
  }, []);

  useEffect(() => {
    if (!card) return

    const newData = {
      imageUrl: card.image.url, imageAlt: card.image.alt,
      
      cardNumber: card.bizNumber,

      title: card.title,
      subtitle: card.subtitle,
      phone: card.phone
    }
    setData(newData)

  }, [card]);


  const handleEdit = async () => {
    await editCard(

      {
        image: { url: value.data.imageUrl, alt: value.data.imageUrl },

        title: value.data.title,
        subtitle: value.data.subtitle,
        phone: value.data.phone,
        web: card.web,
        bizNumber: value.data.cardNumber,
        user_id: card.user_id
      }, id)

    navigate("/card-info/" + id)


  }

  const { value, setData, ...rest } = useForm(
    {},
    cardSchema,
    handleEdit
  );

  return (
    <Container maxWidth="lg">
      <PageHeader title="Card Edit" />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          onChange={rest.validateForm}
          title=""
          styles={{ maxWidth: "450px" }}
          to={""}>
          <Input
            label="title"
            name="title"
            type="text"
            error={value.errors.title}
            onChange={rest.handleChange}
            data={value.data}
          />
          <Input
            label="subtitle"
            name="subtitle"
            type="text"
            error={value.errors.subtitle}
            onChange={rest.handleChange}
            data={value.data}
          />

          <Input
            label="phone"
            name="phone"
            type="text"
            error={value.errors.phone}
            onChange={rest.handleChange}
            data={value.data}
          />
          <Input
            label="image url"
            name="imageUrl"
            type="text"
            error={value.errors.imageUrl}
            onChange={rest.handleChange}
            data={value.data}
          />

          <Input
            label="image Alt"
            name="imageAlt"
            type="text"
            error={value.errors.imageAlt}
            onChange={rest.handleChange}
            data={value.data}
          />

          <Input
            label="cardNumber"
            name="cardNumber"
            type="text"
            error={value.errors.cardNumber}
            onChange={rest.handleChange}
            data={value.data}
          />
        </Form>
      </Container>
    </Container>
  );
};

export default CardEditPage;
