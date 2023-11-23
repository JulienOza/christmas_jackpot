import Navbar from "../components/NavBar/Navbar";
import PopUpFinal from "./PopUpFinal/PopUpFinal";
import CoinMachine from "../assets/coinMachine.png";
import "./GamePage.css"

function GamePage() {
  return (
    <div className="gameContainer">
      <Navbar />
      <PopUpFinal />

    <img src={CoinMachine} className="coinMachine"/>
    </div>
  );
}

export default GamePage;
