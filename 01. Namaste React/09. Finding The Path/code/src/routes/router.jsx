import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import NotFound from "../components/NotFound";
import Layout from "../components/Layout";
import Contact from "../components/Contact";
import Home from "../components/Home";
import RestaurantMenu from "../components/RestaurantMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurantmenu/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
