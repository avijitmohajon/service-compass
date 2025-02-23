import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddService from "../Pages/AddService";
import Services from "../Pages/Services";
import ServiceDetails from "../Pages/ServiceDetails";
import MyReviews from "../Pages/MyReviews";
import MyServices from "../Pages/MyServices";
import SecureRouter from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("https://service-compass-server.vercel.app/services"),
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
        path: "/addservice",
        element: (
          <SecureRouter>
            <AddService></AddService>
          </SecureRouter>
        ),
      },
      {
        path: "/services/:id",
        element: (
          <SecureRouter>
            <ServiceDetails></ServiceDetails>
          </SecureRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://service-compass-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("https://service-compass-server.vercel.app/services"),
      },
      {
        path: "/myreview",
        element: (
          <SecureRouter>
            <MyReviews></MyReviews>
          </SecureRouter>
        ),
      },
      {
        path: "/myservices",
        element: (
          <SecureRouter>
            <MyServices></MyServices>
          </SecureRouter>
        ),
      },
    ],
  },
]);

export default router;
