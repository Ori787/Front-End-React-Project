import axios from "axios";
import Joi from "joi";
import { useState } from "react";
import SignUpJoi from "../validation/SignUpJoi";

const Registration = () => {

    const [userData, setUserData] = useState({
        name:[{      first: '',
        middle: '',
        last: ''}],
      phone: '',
      email: '',
      password: '',
      image: [{    url: '',
      alt: ''}],
      address: [{state: '',
      country: '',
      city: '',
      street: '',
      houseNumber: '',
      zip: ''}],
      isBusiness: '',
    });
  
  
    const handleInputsChange = (e) => {
    setInputsValue((currentState) => ({
      ...currentState,
      [e.target.id]: e.target.value,
    }));
  };

      

  const handleMysubmit = async (e) => {
    e.preventDefault();

    const schema = Joi.object(SignUpJoi)

    const { error } = schema.validate(userData)
    if (error) {
      console.error(error.details[0].message);
      return;
    }

    try {
        await SignUpJoi.validateAsync(userData)
        const apiUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users";
      await axios.post(apiUrl, userData);
      console.log('success!')
    } catch (err) {
      alert("Oops... something went wrong!");
    }
  }

  return { myFormState, handleInputsChange, handleMysubmit };
};

export default Registration;


