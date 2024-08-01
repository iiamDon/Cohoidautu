import HeaderOnly from "../layouts/HeaderOnly";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Recover from "../pages/Login/Recover";
import Cart from "../pages/Cart/Cart";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login, layout: HeaderOnly },
  { path: "/register", component: Register, layout: HeaderOnly },
  { path: "/recover", component: Recover, layout: HeaderOnly },
  /*   { path: "/food" },
  { path: "/fresh" },
  { path: "/flowers" },
  { path: "/mart" }, */
  { path: "/cart", component: Cart, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
