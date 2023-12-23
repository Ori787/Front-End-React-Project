import ROUTES from "../routes/routes";

const myLinks = [
  { to: ROUTES.HOME, children: "Home page" },
  { to: ROUTES.SIGNUP, children: "Register" },
  { to: ROUTES.LOGIN, children: "Login" },
  { to: ROUTES.FAVCARDS, children: "Favourite Cards" },
  { to: ROUTES.ABOUT, children: "About" },
];

const loggedInLinks = [
  {to: ROUTES.HOME, children: "Home Page"},
{ to: ROUTES.NEWCARD, children: "Create Card" },
{ to: ROUTES.FAVCARDS, children: "Favourite Cards" },
{ to: ROUTES.ABOUT, children: "About" },
];


const loggedOutLinks = [
  { to: ROUTES.SPEC, children: "Home Page" },
  { to: ROUTES.SIGNUP, children: "Register" },
  { to: ROUTES.LOGIN, children: "Login" },
  { to: ROUTES.ABOUT, children: "About" },
];

export default myLinks;
export { loggedInLinks, loggedOutLinks };