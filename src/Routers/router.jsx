import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddModel from "../Pages/AddModel";
import ViewModels from "../Pages/ViewModels";
import PrivateRout from "./PrivateRout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        index: true,
        element:<Home></Home>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:"/add-model",
        element: <PrivateRout><AddModel></AddModel></PrivateRout>
      },
      {
        path:"/all-models",
        element: <ViewModels></ViewModels>,
        loader:()=>fetch('http://localhost:3000/models')
      }
    ]
  },
]);

export default router;