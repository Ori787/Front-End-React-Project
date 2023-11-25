import HomePage from "../pages/homepage";
import SignInSide from "../pages/loginpage";
import SignUp from "../pages/signupPage";
import ROUTES from "./routes";
import { Routes, Route } from 'react-router-dom'

const Router = () => {
    return (
        <Routes>
<Route path={ROUTES.HOME} element={<HomePage/>}></Route>
<Route path={ROUTES.LOGIN} element={<SignInSide/>}></Route>
<Route path={ROUTES.SIGNUP} element={<SignUp/>}></Route>
        </Routes>
    )
}

export default Router;