import Menu from "../pages/Menu";
import Homepage from "../pages/Homepage";
import DetailMenu from "../pages/DetailMenu";
import Reservation from "../pages/Reservation";
import About from "../pages/About";
import Contact from "../pages/Contact";
import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home.js";

const router = createBrowserRouter([
  {
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/detailmenu/:menuId",
        element: <DetailMenu />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
