import { useState } from "react";
import axios from "axios";
import LoginLogic from "../pages/login/login";
import ValidateNewCard from "../validation/newCardandEditCardJoi";
import NormalizeNewCard from "../normalizeNewCardandEditCard";
import { getToken } from "../services/storageService";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/routes";

const NewCard = () => {

    const navigate = useNavigate();

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

const Mytoken = getToken();

const errors = ValidateNewCard(cardInput);
    if (errors) return;
    let request = NormalizeNewCard(cardInput);
const create = await axios.post(cardCreationURL, request, {
    headers: {
        'x-auth-token': `${Mytoken}`
    }
});
if (create) {
    navigate(ROUTES.HOME)
}
} catch (err) {
alert("something went wrong!")
}
}
return {cardInput, handleNewCardInputs, handleCardSubmit}
}

export default NewCard;
