import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import { Container, Grid } from "@mui/material";
import CardComponent from '../../components/Cardcomp';


const LoggedinBizHomePage = () => {

  const [cards, setCards] = useState([])

  useEffect(() => {
  const cardURL = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
  axios.get(cardURL).then(response => {
    setCards(response.data);
  })
  .catch(error => {
    console.error("Something went wrong with getting the cards", error);
  });
}, [])

return (
  <Container>
    <Grid container spacing={8}>
      {cards.map((card) => (
        <Grid item key={card._id} xs={3} sm={3} md={4} lg={4}>
          <CardComponent
          _id={card._id}
          title={card.title}
          subTitle={card.subtitle}
          phone={card.phone}
          address={`${card.address.city}, ${card.address.street} ${card.address.houseNumber}`}
          img={card.image.url}
          alt={card.image.alt}
          like={card.likes}
          cardNumber={card.cardNumber}
/>
        </Grid>
      ))}
    </Grid>
  </Container>
);
};


export default LoggedinBizHomePage;
