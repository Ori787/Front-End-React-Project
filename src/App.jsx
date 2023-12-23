import "react-toastify/dist/ReactToastify.css";
import LayoutComponent from "./App Layout/main/layoutcomp";
import { ToastContainer } from "react-toastify";
import Router from "./routes/router";
import useAutoLogin from "./hooks/useAutoLogin";
import { useEffect, useState } from "react";
import { LinearProgress } from "@mui/material";

const App = () => {
  const [doneAuth, setDoneAuth] = useState(false);
  const autoLogin = useAutoLogin();
  useEffect(() => {
    (async () => {
      try {
        await autoLogin();
      } catch (err) {
        alert("something went wrong");
      } finally {
        setDoneAuth(true);
      }
    })();
  }, []);
  return (
    <LayoutComponent>
      <ToastContainer />
      {doneAuth ? <Router /> : <LinearProgress />}
    </LayoutComponent>
  );
};

export default App;