import Navbar from "../components/NavBar/Navbar";
import Routourne from "./Routourne";
import CoinMachine from "../assets/coinMachine.png";
import "./GamePage.css";

function GamePage() {
  return (
    <>
      <div className="gameContainer">
        <Navbar />
        <img src={CoinMachine} className="coinMachine" />
        <Routourne />
      </div>
    </>
  );
}

export default GamePage;
