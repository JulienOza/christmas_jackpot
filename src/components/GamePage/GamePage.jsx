import Navbar from "../NavBar/Navbar";
import CoinMachine from "../../assets/coinMachine.png";
import Routourne from "../Routourne";
import "../GamePage/GamePage.scss";
import { useState } from "react";
import Bar from "../../assets/bar.png";

function GamePage() {
  const [isClicked, setIsClicked] = useState(false);
  const handleButtonClick = () => {
    setIsClicked(!isClicked);
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
    setTimeout(() => {
      simulateClick(100, 100);
    }, 1000);
  };

  // Fonction pour générer un clic à une coordonnée spécifique
  function simulateClick(x, y) {
    const event = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      clientX: x,
      clientY: y,
    });

    // Remplacez "targetElement" par la référence de l'élément sur lequel vous souhaitez déclencher le clic
    const targetElement = document.querySelector(".reel");
    targetElement.dispatchEvent(event);
  }

  return (
    <>
      <div className="gameContainer">
        <Navbar />
        <ul className="lightrope-gamepage">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <img src={CoinMachine} className="coinMachine" />
        <button
          type="button"
          className={`handleBar ${isClicked ? "clicked" : ""}`}
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

