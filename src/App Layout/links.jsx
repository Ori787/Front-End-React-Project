import { Box } from "@mui/material";
import nextKey from "generate-my-key";
import myLinks, {
  loggedInLinks,
  loggedOutLinks,
} from "./navLinks";
import NavLinkComponent from "./navLinkComp";
import { useSelector } from "react-redux";

const Links = () => {
  const { loggedIn } = useSelector((bigPie) => bigPie.authSlice);
  const currentList = loggedIn ? loggedInLinks : loggedOutLinks;
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 9 }}>
      {currentList.map((myItem) => (
            <NavLinkComponent to={myItem.to} key={nextKey()}>
              {myItem.children}
            </NavLinkComponent>
          ))}
    </Box>
  );
};

export default Links;
