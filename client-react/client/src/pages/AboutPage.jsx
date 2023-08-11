import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "./../components/PageHeader";
import Grid from "@mui/material/Grid";

const AboutPage = () => {
  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Welcome to iCards!"
        subtitle="On this page you can find explanations about using the application"
      />
      
      <Grid container spacing={6}>
        <Grid item xs={42} md={6} alignSelf="center">
        At iCards, we're more than just a website – we're a passionate community of 
        trading card enthusiasts who eat, sleep, and breathe collectible cards.
        Our mission is to bring together collectors from all walks of life,
        share knowledge, and celebrate the incredible world of trading cards.
       
       
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: { md: "flex", xs: "none" },
            justifyContent: "center",
          }}
        >
          <img src="/assets/images/card.jpg" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
