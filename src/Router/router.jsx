import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddService from "../Pages/AddService";
import Services from "../Pages/Services";
import ServiceDetails from "../Pages/ServiceDetails";
import MyReviews from "../Pages/MyReviews";
import MyServices from "../Pages/MyServices";
import SecureRouter from "./PrivateRoute";
import Error from "../Pages/Error";

// Base URL
const baseURL = "https://service-compass-server.vercel.app";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: async () => {
          try {
            const res = await fetch(`${baseURL}/services`);
            if (!res.ok) {
              throw new Response("Failed to load services", { status: res.status });
            }
            return res;
          } catch (error) {
            throw new Response("Network Error", { status: 500 });
          }
        },
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addservice",
        element: (
          <SecureRouter>
            <AddService />
          </SecureRouter>
        ),
      },
      {
        path: "/services/:id",
        element: (
          <SecureRouter>
            <ServiceDetails />
          </SecureRouter>
        ),
        loader: async ({ params }) => {
          try {
            const res = await fetch(`${baseURL}/services/${params.id}`);
            if (!res.ok) {
              throw new Response("Service Not Found", { status: res.status });
            }
            return res;
          } catch (error) {
            throw new Response("Network Error", { status: 500 });
          }
        },
      },
      {
        path: "/services",
        element: <Services />,
        loader: async () => {
          try {
            const res = await fetch(`${baseURL}/services`);
            if (!res.ok) {
              throw new Response("Failed to load services", { status: res.status });
            }
            return res;
          } catch (error) {
            throw new Response("Network Error", { status: 500 });
          }
        },
      },
      {
        path: "/myreview",
        element: (
          <SecureRouter>
            <MyReviews />
          </SecureRouter>
        ),
      },
      {
        path: "/myservices",
        element: (
          <SecureRouter>
            <MyServices />
          </SecureRouter>
        ),
      },
    ],
  },
]);

export default router;