import { useState } from "react";
import axios from "axios";
import LoginLogic from "../pages/login/login";
import ValidateNewCard from "../validation/newCardandEditCardJoi";
import NormalizeNewCard from "../normalizeNewCardandEditCard";

const NewCard = () => {

    const [cardInput, setCardInput] = useState({
        title:"",
        subtitle:"",
        description:"",
        phone:"",
        email:"",
        web:"",
        url:"",
        alt:"",
        state:"",
        country:"",
        city:"",
        street:"",
        houseNumber:"",
        zip:""
    })

    const handleNewCardInputs = (e) => {
       setCardInput((currentState) => ({
        ...currentState,
        [e.target.id] : e.target.value
       }));
    };

   const handleCardSubmit = async (e) => {

try {

    e.preventDefault()

const cardCreationURL = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards"

const Mytoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQyNGFlOWE4ZDFlYWUxMmQzMWUzNjAiLCJpc0J1c2luZXNzIjp0cnVlLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjk4ODQzNDQyfQ.znXbzyxMKeNrKf3dA8jXQ5CFptM8-iXjeFtqx3XfHD0";
const errors = ValidateNewCard(cardInput);
console.log(errors)
    if (errors) return;
    let request = NormalizeNewCard(cardInput);
const create = await axios.post(cardCreationURL, request, {
    headers: {
        'x-auth-token': `${Mytoken}`
    }
});
console.log("data", create.data);
} catch (err) {
console.error('something went wrong!', err)
}
}
return {cardInput, handleNewCardInputs, handleCardSubmit}
}

export default NewCard;