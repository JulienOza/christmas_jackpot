import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Snow from "./components/Snow/Snow.jsx";
import HomePage from "./components/HomePage.jsx";
import GamePage from "./components/GamePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HomePage />
            <Snow />
          </>
        ),
      },
      {
        path: "/GamePage",
        element: (
          <>
            <GamePage />
            <Snow />
          </>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
