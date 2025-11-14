import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import NavLayout from "@/pages/Layout/NavLayout";
import SignUp from "@/pages/Sign-Up";
import Login from "@/pages/Login";

export const RouterComponent = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <NavLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/chat",
          element: <Chat />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};
