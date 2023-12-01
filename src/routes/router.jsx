import HomePage from "../pages/homepage";
import SignInSide from "../pages/login/loginpage";
import SignUp from "../pages/signup/signupPage";
import ROUTES from "./routes";
import { Routes, Route } from 'react-router-dom'
import LoggedinBizHomePage from "../pages/login/loggedinBizHomePage";

const Router = () => {
    return (
        <Routes>
<Route path={ROUTES.HOME} element={<HomePage/>}></Route>
<Route path={ROUTES.LOGIN} element={<SignInSide/>}></Route>
<Route path={ROUTES.SIGNUP} element={<SignUp/>}></Route>
<Route path={ROUTES.BIZMAN} element={<LoggedinBizHomePage/>}></Route>
        </Routes>
    )
}

export default Router;