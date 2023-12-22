import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import { Container, Grid } from "@mui/material";
import CardComponent from '../../Cards/components/Cardcomp';
import ReactPaginate from 'react-paginate';
import { HandshakeOutlined } from '@mui/icons-material';
import { getToken } from '../../services/storageService';
import { jwtDecode } from 'jwt-decode';



const LoggedinBizHomePage = () => {

  const onLikeClicked = async (_id) => {
    console.log("Like button clicked for card ID:", _id);
    const URL = `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${_id}`;
    const token = getToken();
    try{
        const response = await axios.patch(URL, {}, {
            headers: {
                'x-auth-token': token
            }
        })
        if(response.status === 200) {
            //setCards(prev => prev.filter(card => card._id !== _id))
            setCards(prev => prev.map(card => {
              if(card._id === _id) 
              {
                return {...card, liked: !card.liked}
              }
              return card;
            }))
        }
    } catch (err) {
        console.error(err, "something went wrong")
    }
    }

  useEffect(() => {
  const cardURL = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
  axios.get(cardURL).then(response => {
    setCards(response.data);
  })
  .catch(error => {
    console.error("Something went wrong with getting the cards", error);
  });
}, [])

const [cards, setCards] = useState([]);

  const onDeleteCardClick = async (_id) => {
    const myURL = `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${_id}`;

    const deleteToken = getToken();

   try {
    const response = await axios.delete(myURL, {
      headers: {
        "Content-Type": "application/json",
      'x-auth-token':`${deleteToken}`  
      }
    })

    if(response.status === 200) {
      setCards((prevCards)=>prevCards.filter((card) => card._id !== _id))
    }}

 catch (err) {
console.error("An error occured while trying to delete this card")
    }
  };


return (
  <Container>
    <Grid container spacing={8}>
      {cards.map((card) => (
        <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
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
          onDeleteCardClick={onDeleteCardClick}
          onLikeClicked={onLikeClicked}
/>
        </Grid>
      ))}
    </Grid>
  </Container>
);
};

export default LoggedinBizHomePage;
