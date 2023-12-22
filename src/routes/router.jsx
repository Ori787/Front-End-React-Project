import { Route, Routes } from "react-router-dom";
import FavCards from "../Cards/components/favCardsComp";

import ROUTES from "./routes"
import HomePage from "../pages/SignedOutHome/homepage";
import RegisterPage from "../pages/signup/signupPage";
import Error404Page from "../pages/404page";
import LoginPage from "../pages/login/loginpage";
import AuthGuard from "../Guard/AuthGuard";
import BizGuard from "../Guard/BizGuard";
import LoggedinBizHomePage from "./../pages/login/loggedinBizHomePage";
import CardEditPage from "../Cards/components/cardEdit";
import CreateNewCard from "../Cards/createCard";


const Router = () => {
  return (
    <Routes>
            <Route path={ROUTES.SPEC} element={<HomePage />} />
                        <Route path={ROUTES.FAVCARDS} element={<FavCards />} />
      <Route path={ROUTES.SIGNUP} element={<RegisterPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.EDITCARD} element={<CardEditPage />} />
      <Route
        path={ROUTES.NEWCARD}
        element={
          <AuthGuard>
            <BizGuard>
              <CreateNewCard />
            </BizGuard>
          </AuthGuard>
        }
      />
      <Route path={ROUTES.HOME}
       element={
        <AuthGuard>
          <BizGuard>
       <LoggedinBizHomePage />
       </BizGuard>
       </AuthGuard>
       }
       />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
};
export default Router;