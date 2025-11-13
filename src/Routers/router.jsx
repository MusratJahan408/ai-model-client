import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddModel from "../Pages/AddModel";
import ViewModels from "../Pages/ViewModels";
import PrivateRout from "./PrivateRout";
import ModelDetails from "../Pages/ModelDetails";
import EditModel from "../Pages/EditModel";
import MyModels from "../Pages/MyModels";
import ModelPurchase from "../Pages/ModelPurchase";
import LoadingSpinner from "../Components/LoadingSpinner";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("ai-model-server-nu.vercel.app/latest-models"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-model",
        element: (
          <PrivateRout>
            <AddModel></AddModel>
          </PrivateRout>
        ),
      },
      {
        path: "/all-models",
        element: <ViewModels></ViewModels>,
        loader: () => fetch("ai-model-server-nu.vercel.app/models"),
      },
      {
        path: "/models-details/:id",
        element: (
          <PrivateRout>
            <ModelDetails></ModelDetails>
          </PrivateRout>
        ),
      },
      {
        path: "/my-models",
        element: (
          <PrivateRout>
            <MyModels></MyModels>
          </PrivateRout>
        ),
      },
      {
        path: "/my-purchase",
        element: (
          <PrivateRout>
            <ModelPurchase></ModelPurchase>
          </PrivateRout>
        ),
      },
      {
        path: "/edit-model/:id",
        element: (
          <PrivateRout>
            <EditModel></EditModel>
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(`ai-model-server-nu.vercel.app/models/${params.id}`),
      },
    ],
  },
]);

export default router;
