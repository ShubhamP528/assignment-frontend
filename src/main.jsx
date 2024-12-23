import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Students from "./components/Students.jsx";
import store from "./utils/store.js";
import { Provider } from "react-redux";
import Dummy from "./components/Dummy.jsx";
import React from "react";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dummy name="Dashboard" />,
      },
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "chapter",
        element: <Dummy name="Chapter" />,
      },
      {
        path: "help",
        element: <Dummy name="Help" />,
      },
      {
        path: "reports",
        element: <Dummy name="Reports" />,
      },
      {
        path: "settings",
        element: <Dummy name="Settings" />,
      },
      {
        path: "*", // Fallback route for undefined paths
        element: <Dummy name="404 - Page Not Found" />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
