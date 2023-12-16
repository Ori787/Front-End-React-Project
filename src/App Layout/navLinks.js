import ROUTES from "../routes/routes";

const myLinks = [
  { to: ROUTES.HOME, children: "Home page" },
  { to: ROUTES.SIGNUP, children: "Register page" },
  { to: ROUTES.LOGIN, children: "Login page" },
];

const loggedInLinks = [{to: ROUTES.HOME, children: "Home Page"},
{ to: ROUTES.NEWCARD, children: "Create page" }];


const loggedOutLinks = [
  { to: ROUTES.SPEC, children: "Home Page" },
  { to: ROUTES.SIGNUP, children: "Register page" },
  { to: ROUTES.LOGIN, children: "Login page" },
];

export default myLinks;
export { loggedInLinks, loggedOutLinks };