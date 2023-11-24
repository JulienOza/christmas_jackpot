import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RoutourneProvider } from "./contexts/RoutourneContext.jsx";
import App from "./App.jsx";
import "./index.css";
import Snow from "./components/Snow/Snow.jsx";
import HomePage from "./components/HomePage.jsx";
import GamePage from "./components/GamePage.jsx";
import AboutUsPage from "./components/AboutUsPage.jsx";
import Navbar from "./components/NavBar/Navbar.jsx";

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
      {
        path: "/AboutUs",
        element: (
          <>
            <AboutUsPage />
            <Snow />
            <Navbar />
          </>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RoutourneProvider>
    <RouterProvider router={router} />
  </RoutourneProvider>
);
