import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import { AllOffers } from "../pages/AllOffers/AllOffers";
import AllRestaurantsItems from "../pages/AllRestaurrentsItems/AllRestaurentsItems";
import SignIn from "../pages/Authentication/SignIn";
import SignUp from "../pages/Authentication/SignUp";
import Home from "../pages/Home/Home";
import AllRestaurents from "../pages/AllRestaurents/AllRestaurents";
import Additems from "../pages/Temporary/Additems";
import RestaurantRegister from "../pages/Temporary/RestaurantRegister";
import SignUpDeliveryMan from "../pages/Authentication/SignUpDeliveryMan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "allrestaurantsitems",
        element: <AllRestaurantsItems></AllRestaurantsItems>,
      },
      {
        path: "offers",
        element: <AllOffers></AllOffers>,
      },
      {
        path: "allrestaurants",
        element: <AllRestaurents></AllRestaurents>
      },
      {
        path:"additems",
        element: <Additems></Additems>
      },
      {
        path:"restaturantregister",
        element: <RestaurantRegister></RestaurantRegister>
      },
      {
        path:"signupwithdeliveryman",
        element:<SignUpDeliveryMan></SignUpDeliveryMan>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
  },
]);
export default router;
