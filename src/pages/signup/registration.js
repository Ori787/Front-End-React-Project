import axios from "axios";
import Joi from "joi";
import { useState } from "react";
import SignUpJoi from "../../validation/SignUpJoi";
import normalizeSignup from "./normalizeSignup";
import validateSignUp from "../../validation/SignUpJoi";

const Registration = () => {

  const [inputsValue, setInputsValue] = useState({
    first: "",
    middle: "",
    last: "",
    email: "",
    password: "",
    phone: "",
    url: "",
    alt: "",
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
    isBusiness: true,
  });
  
  
  const handleInputsChange = (e) => {
    setInputsValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleBusinessCheckboxChange = (e) => {
    setInputsValue((currentState) => ({
      ...currentState,
      isBusiness: e.target.checked,
    }));
  };

      

  const handleMysubmit = async (e) => {
    try {
    e.preventDefault();
const errors = validateSignUp(inputsValue);
console.log(errors)
    if (errors) return;
    let request = normalizeSignup(inputsValue);
        const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users";
     const {data} = await axios.post(apiUrl, request);
      console.log("data", data)
    } catch (err) {
      console.log(err)
      alert("Oops... something went wrong!");
    }
  }

  return { inputsValue, handleInputsChange, handleMysubmit, handleBusinessCheckboxChange };
};

export default Registration;


