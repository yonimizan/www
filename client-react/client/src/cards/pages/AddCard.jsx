import { Container } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import Form from "../../forms/components/Form";
import useForm from "../../forms/hooks/useForm";

import Input from "../../forms/components/Input";
import { creatCard } from "../services/cardService";
import addCardSchema from "../services/addCardSchema";


const AddCard = () => {
  

  const handleSubmit = async (data) => {
    await creatCard(data);
  }

  const { 
    data,
    errors,
     ...rest } = useForm(
    {},
    addCardSchema,
    handleSubmit,
    
  );

  Navigate("/cards")
    
  return (
    <Container maxWidth="lg">
      <PageHeader title="Add Card " />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}s
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
            error={errors}
            onChange={rest.handleChange}
            data={data}
          />
          <Input
            label="subtitle"
            name="subtitle"
            type="text"
            error={errors}
            onChange={rest.handleChange}
            data={data}
          />

          <Input
            label="phone"
            name="phone"
            type="text"
            error={errors}
            onChange={rest.handleChange}
            data={data}
          />
          <Input
            label="image url"
            name="imageUrl"
            type="text"
            error={errors}
            onChange={rest.handleChange}
            data={data}
          />

          <Input
            label="imageAlt"
            name="imageAlt"
            type="text"
            error={errors}
            onChange={rest.handleChange}
            data={data}
          />

          <Input
            label="cardNumber"
            name="bizNumber"
            type="text"
            error={errors}
            onChange={rest.handleChange}
            data={data}
          />


     
   
          
        </Form>
      </Container>
    </Container>
  );
};

export default AddCard;
