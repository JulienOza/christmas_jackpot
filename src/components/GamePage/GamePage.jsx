import Navbar from "../NavBar/Navbar";
import PopUpFinal from "../PopUpFinal/PopUpFinal";
import CoinMachine from "../../assets/coinMachine.png";
import Routourne from "../Routourne";
import "../GamePage/GamePage.css";

function GamePage() {
  return (
    <div className="gameContainer">
      <Navbar />
      <Routourne />
      <PopUpFinal />

      <img src={CoinMachine} className="coinMachine" />
    </div>
  );
}

export default GamePage;
