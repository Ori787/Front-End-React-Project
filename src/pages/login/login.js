import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routes";
import Registration from "../signup/registration";
import {useDispatch} from "react-redux";
import { authActions } from "../../store/authSlice";
import store from "../../store/bigPie";
import { jwtDecode } from "jwt-decode";
import { storeToken } from "../../services/storageService";



const LoginLogic = () => {

const {inputsValue} = Registration()

const dispatch = useDispatch();

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

const [rememberMe, setRememberMe] = useState(true);


const HandleLoginSubmit = async (e) => {
    const loginURL = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login"
    const request = loginValue;
    try {
        e.preventDefault()
const {data} = await axios.post(loginURL, request)

const decodedToken = jwtDecode(data)

if(data) {
 storeToken(data,rememberMe)

    dispatch(authActions.login(decodedToken))

}
if(decodedToken.isBusiness) {navigate(ROUTES.HOME)} 
else {
navigate(ROUTES.SPEC)
}
    } catch (err) {
alert("something went wrong")
alert("Oops... something went wrong!");
    }
}
return { loginValue, handleLoginInputs, HandleLoginSubmit };

};

export default LoginLogic;

