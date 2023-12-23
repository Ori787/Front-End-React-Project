import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/routes";

const HandleLogout = () => {
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (logout) {

      navigate(ROUTES.LOGIN);

      try {
        localStorage.clear();
      } catch (err) {
        console.error("Error clearing local storage:", err);
      }
    }
  }, [logout, navigate]);

  const handlelogout = (e) => {
    try {

      setLogout(true);
    } catch (err) {
      alert("something went wrong");
    }
  };

  return { handlelogout };
};

export default HandleLogout;
