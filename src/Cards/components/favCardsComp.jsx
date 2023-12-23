import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { getToken } from "../../services/storageService";
import axios from "axios";
import CardComponent from "./Cardcomp";
import { Container, Grid } from "@mui/material";
import { useEffect } from 'react';
import LoggedinBizHomePage from "../../pages/login/loggedinBizHomePage";




const FavCards = () => {

    const [cards, setCards] = useState([]);

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

    const onDeleteCardClick = async (_id) => {
        const myURL = `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${_id}`;
        const token = getToken();
        try {
            const response = await axios.delete(myURL, {
                headers: {
                    "Content-Type": "application/json",
                    'x-auth-token': `${token}`
                }
            })
            if (response.status === 200) {
                setCards((prevCards) => prevCards.filter((card) => card._id !== _id))
            }
        } catch (err) {
            console.error("An error occured while trying to delete this card")
        }
    };



    useEffect(() => {
        const decodedToken = jwtDecode(getToken());
        const id = decodedToken._id;
        const cardURL = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"
        axios.get(cardURL).then(response => {
            setCards(response.data.filter(card => card.likes.includes(id)
            ));
        })
            .catch(error => {
                console.error("Something went wrong with getting the cards", error);
            });
    }, [])

    return (
        <Container>
            <Grid container spacing={8}>
                {cards.map((card) => (
                    <Grid item key={card._id} xs={12} sm={3} md={4} lg={4}>
                        <CardComponent
                            _id={card._id}
                            title={card.title}
                            subTitle={card.subtitle}
                            phone={card.phone}
                            address={`${card.address.city}, ${card.address.street} ${card.address.houseNumber}`}
                            img={card.image.url}
                            alt={card.image.alt}
                            like={card.like}
                            cardNumber={card.cardNumber}
                            onDeleteCardClick={onDeleteCardClick}
                            onLikeClicked={onLikeClicked}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default FavCards;