import HeaderOnly from "../layouts/HeaderOnly";
import Home from "../pages/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Recover from "../pages/Login/Recover";
import Cart from "../pages/Cart";
import Pizza from "../pages/Pizza";
import Salads from "../pages/Salads";
import Drinks from "../pages/Drinks";
import Sauces from "../pages/Sauces";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login, layout: HeaderOnly },
  { path: "/register", component: Register, layout: HeaderOnly },
  { path: "/recover", component: Recover, layout: HeaderOnly },
  { path: "/pizza", component: Pizza },
  { path: "/drinks", component: Drinks },
  { path: "/sauces", component: Sauces },
  { path: "/salads", component: Salads },
  { path: "/cart", component: Cart, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
