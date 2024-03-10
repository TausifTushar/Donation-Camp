import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Donation from "./Components/Donation";
import Homepage from "./Components/Homepage";
import Statistics from "./Components/Statistics";
import Details from "./Components/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children:[
        {
          path: "/",
          element: <Homepage></Homepage>
        },
        {
          path: "/Donation",
          element: <Donation></Donation>
        },
        {
          path: "/Statistics",
          element: <Statistics></Statistics>
        },
        {
          path: "/details/:id",
          loader :()=> fetch('/Donation.json'),
          element: <Details></Details>
        }
      ]

      
      
      
    },
  ]);
  export default router;
  