import React from 'react';
import MyCard from '../../Cards/components/cards';
import { Grid } from '@mui/material';
import { Container } from '@mui/material';


const HomePage = () => {

    const cardList = [
        {
          id: 1,
          image: "https://cdn.ferrari.com/cms/network/media/img/resize/62e245f5771eaa067937bd85-296gt3_intro-project_focus-1-resize?",
          title: "Ferrari",
          description: "Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded in 1939 by Enzo Ferrari, the company built its first car in 1940."
        },
        {
          id: 2,
          image: "https://media.autoexpress.co.uk/image/private/s--IUbkMK1n--/v1660755222/evo/2022/08/New%20992%20Porsche%20911%20GT3%20RS%20revealed-9.jpg",
          title: "Porsche",
          description: " A German automobile manufacturer specializing in high-performance sports cars, SUVs and sedans, headquartered in Stuttgart, Baden-Württemberg, Germany."
        }]
   

  return (
    <Container>
    <Grid container spacing={10} justifyContent={'center'}>
  {cardList.map((card) => (
    <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
    <MyCard 
    key={card.id}
    image={card.image}
    description={card.description}
    title={card.title}
     />
     </Grid>
  ))}
  </Grid>
</Container>
  );
}


export default HomePage;
