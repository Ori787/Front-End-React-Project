import { useState } from "react"
import axios from "axios";
import ValidateNewCard from "../validation/newCardandEditCardJoi";
import NormalizeNewCard from "../normalizeNewCardandEditCard";

const CardEditLogic = () => {

const [currInput, setNewInput] = useState({
title: "",
subtitle: "",
description: "",
phone: "",
email: "",
web: "",
image: "",
url: "",
alt: "",
state: "",
country: "",
city: "",
street: "",
houseNumber: "",
zip: ""
})

const handleEditCardInputs = (e) => {
    setNewInput((currentState) => ({
     ...currentState,
     [e.target.id] : e.target.value
    }));
 };

const handleEditSubmit = async (e) => {
    console.log( NormalizeNewCard(currInput))
    try {
        e.preventDefault()
        const errors = ValidateNewCard(currInput);
        console.log(errors)
        if (errors) return
        let myReq = NormalizeNewCard(currInput)
    const EditCardURL = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/65424d35cb6bcb58697bab4a"
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU5ZjJkYmRlZGYyZGIyYjUyYmRlNDIiLCJpc0J1c2luZXNzIjp0cnVlLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNzAwMzkzNzY4fQ.xwXvV-fY_e9y7HPMItxQER4oh42A0ZbosPyheq7Jq9c";
const submit = await axios.put(EditCardURL, currInput, {
    headers: { 
        'x-auth-token': `${authToken}`
}
})
} catch (err) {
console.error('Oops, Error!', err)
}}
return {handleEditCardInputs, handleEditSubmit, currInput}
}

export default CardEditLogic;