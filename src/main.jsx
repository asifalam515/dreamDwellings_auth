import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar.jsx";
import Root from "./pages/Root/Root.jsx";
import ErrorPage from "./pages/ErrorPage/Erropage.jsx";
import Home from "./pages/Home/Home.jsx";
import Register from "./pages/Register/Register.jsx";
import Login from "./pages/Login/Login.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register/",
        element: <Register></Register>,
      },
      {
        path: "/login/",
        element: <Login></Login>,
      },
      {
        path: "/update/",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile/",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
