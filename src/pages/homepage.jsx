
import React from 'react';
import MyCard from '../components/cards';

const HomePage = () => {

    const cardList = [
        {
          id: 1,
          image: "https://cdn.ferrari.com/cms/network/media/img/resize/62e245f5771eaa067937bd85-296gt3_intro-project_focus-1-resize?",
          title: "Ferrari",
          description: "Ferrari S.p.A. is an Italian luxury sports car manufacturer based in Maranello, Italy. Founded in 1939 by Enzo Ferrari, the company built its first car in 1940, adopted its current name in 1945, and began to produce its current line of road cars in 1947."
        },
        {
          id: 2,
          image: "https://media.autoexpress.co.uk/image/private/s--IUbkMK1n--/v1660755222/evo/2022/08/New%20992%20Porsche%20911%20GT3%20RS%20revealed-9.jpg",
          title: "Porsche",
          description: " A German automobile manufacturer specializing in high-performance sports cars, SUVs and sedans, headquartered in Stuttgart, Baden-Württemberg, Germany."
        }]
   

  return (
  <>
  {cardList.map((card) => (
    <MyCard sx={{}}
    key={card.id}
    image={card.image}
    description={card.description}
    title={card.title}
     />
  ))}
  </>
  );
}


export default HomePage;
