import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/Signup/Signup";
import Blog from "../Pages/Blog/Blog";
import Register from "../Pages/Register/Register";

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
    //   {
    //     path:"/signup",
    //     element:<SignUp></SignUp>
    //   },
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      
    ]
    },
  ]);

  export default router;