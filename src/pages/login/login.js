import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routes";
import Registration from "../signup/registration";


const LoginLogic = () => {

const {inputsValue} = Registration()

    const navigate = useNavigate()

const [loginValue, setLoginValue] = useState({
    email:"",
    password:""
})

const handleLoginInputs = (e) => {
    setLoginValue((currentState) => ({
        ...currentState,
[e.target.id] : e.target.value
    }));
};

const HandleLoginSubmit = async (e) => {
    const loginURL = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login"
    const request = loginValue;
    try {
        e.preventDefault()
const {data} = await axios.post(loginURL, request)
if(inputsValue.isBusiness) {navigate(ROUTES.BIZMAN)}
else {navigate(ROUTES.HOME)}
console.log("data", data)
    } catch (err) {
console.log(err)
alert("Oops... something went wrong!");
    }
}
return { loginValue, handleLoginInputs, HandleLoginSubmit };

};

export default LoginLogic;