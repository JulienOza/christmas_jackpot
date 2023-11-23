import Navbar from "../components/NavBar/Navbar";
import PopUpFinal from "./PopUpFinal/PopUpFinal";
import CoinMachine from "../assets/coinMachine.png";
import Routourne from "../components/Routourne"
import "./GamePage.css"

function GamePage() {
  return (
    <div className="gameContainer">
      <Navbar />
      <Routourne/>
      <PopUpFinal />

    <img src={CoinMachine} className="coinMachine"/>
    </div>
  );
}

export default GamePage;
