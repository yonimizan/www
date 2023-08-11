import React from "react";
import { Container } from "@mui/material";
import UserForm from "../components/UserForm";
import initialAddCardForm from "../cards/services/initialAddCardForm";
import addCardSchema from "../cards/services/addCardSchema";

const addCardPage = () => {
 

  const { value, ...rest } = UserForm(
    initialAddCardForm,
    addCardSchema,
 
  );
 
  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserForm
        title=""
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={value.data}
        errors={value.errors}
        setData={rest.setData}
      />
    </Container>
  );
};

export default addCardPage;
