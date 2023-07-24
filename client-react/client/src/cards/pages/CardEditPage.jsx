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
 
    const newData = {  imageUrl: card.image.url, imageAlt: card.image.alt,
    
      state: card.address.state,
      
      country: card.address.country,
      
      city : card.address.city,
      
      street : card.address.street,
      
      houseNumber : card.address.houseNumber,
      cardNumber: card.bizNumber,
      
      zip : card.address.zip,
      
      title: card.title, 
      subtitle: card.subtitle, 
      phone: card.phone
          }
        setData(newData)
   
  }, [card]);


  const handleEdit = async () => {
    await editCard(
      
      {  image: {url: value.data.imageUrl, alt: value.data.imageUrl },
    
        title: value.data.title,
        subtitle: value.data.subtitle,
        description: card.description,
        phone: value.data.phone,
        email: card.email,
        web: card.web,
        address:{
          state: value.data.state,
        country: value.data.country,
        city: value.data.city,
        street: value.data.street,
        houseNumber: value.data.houseNumber,
        zip: value.data.zip,
        },
       

        bizNumber: value.data.cardNumber,
        user_id: card.user_id,
        

       
            }, id)

            navigate("/card-info/"+id)

   
  }

  const { value, setData, ...rest } = useForm(
   {},
    cardSchema,
    handleEdit
  );
  
  return (
    <Container maxWidth="lg">
      <PageHeader title="Card Edit"  />
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
        title="Edit Card"
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


<Input
        name="state"
        label="state"
        error={value.errors.state}
        onChange={rest.handleChange}
        data={value.data}
        sm={6}
        required={false}
      />
      <Input
        label="country"
        name="country"
        error={value.errors.country}
        onChange={rest.handleChange}
        data={value.data}
        sm={6}
      />
      <Input
        name="city"
        label="city"
        error={value.errors.city}
        onChange={rest.handleChange}
        data={value.data}
        sm={6}
      />
      <Input
        name="street"
        label="street"
        error={value.errors.street}
        onChange={rest.handleChange}
        data={value.data}
        sm={6}
      />
      <Input
        name="houseNumber"
        label="house Number"
        type="number"
        error={value.errors.houseNumber}
        onChange={rest.handleChange}

        data={value.data}
        sm={6}
      />
      <Input
        name="zip"
        label="zip"
        error={value.errors.zip}
        onChange={rest.handleChange}

        data={value.data}
        sm={6}
        required={false}
      />
      </Form>
      </Container>
    </Container>
  );
};

export default CardEditPage;
