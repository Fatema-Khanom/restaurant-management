import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/Signup/Signup";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[{
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      },
      
    ]
    },
  ]);

  export default router;