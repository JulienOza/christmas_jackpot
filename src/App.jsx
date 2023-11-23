import { Outlet } from "react-router-dom";
import Routourne from "./components/Routourne";
import Snow from "./components/Snow/Snow";
import PopUpFinal from "./components/PopUpFinal/PopUpFinal";
import "./App.css";

function App() {
  return (
    <>
      <Snow />
      <Routourne />
    </>
  );
}

export default App;
