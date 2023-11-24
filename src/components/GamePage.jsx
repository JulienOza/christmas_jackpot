import Navbar from "../components/NavBar/Navbar";
import {useState} from "react";
import Routourne from "./Routourne";
import CoinMachine from "../assets/coinMachine.png";
import "./GamePage.css";
import Bar from "../assets/bar.png";



function GamePage() {

    const [isClicked, setIsClicked] = useState(false);
    const handleButtonClick = () => {
      setIsClicked(!isClicked);
      setTimeout(() => {
        setIsClicked(false);
      }, 500);
    }
  
  
  return (
    <>
      <div className="gameContainer">
        <Navbar />
        <img src={CoinMachine} className="coinMachine" />
        <button
      type="button"
      className={`handleBar ${isClicked ? 'clicked' : ''}`}
      onClick={handleButtonClick}
    >
      <img src={Bar} alt="Bar" className="bar" />
    </button>
        <Routourne />
      </div>
    </>
  );
}


export default GamePage;
