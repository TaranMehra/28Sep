import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import NavLayout from "@/pages/Layout/NavLayout";

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
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};
