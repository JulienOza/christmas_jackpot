import Navbar from "../components/NavBar/Navbar";
import {useState} from "react";
import Routourne from "./Routourne";
import CoinMachine from "../assets/coinMachine.png";
import "./GamePage.css";
import Bar from "../assets/bar.png";

const Ribery = {
  name: "Ribéry",
  img: RiberyManchot,
  slogan: "Grâce à toi, la routourne a tourné !",
  img2: null,
  img3: RiberySpeak,
  className: "ribery",
  classNameBubble: "bubbleRibery",
  classNameThird: null,
};

const Zlatan = {
  name: "Zlatan",
  img: ZlatanPop,
  slogan: "Grâce à toi, Zlatan ne parlera plus de lui à la 3ème personne !",
  img2: Modesty,
  img3: ZlatanSpeak,
  className: "zlatan",
  classNameBubble: "speak",
  classNameThird: "modesty",
};

const Macron = {
  name: "Macron",
  img: MacronGilet,
  slogan: "Grâce à toi, Macron manifeste contre le prix de l'essence !",
  img2: null,
  img3: MacronBubble,
  className: "macron",
  classNameBubble: "macronBubble",
  classNameThird: null,
};

const Jcvd = {
  name: "JCVD",
  img: JcvdWater,
  slogan: "Grâce à toi, il restera peut être encore de l'eau dans 30 ans !",
  img2: null,
  img3: Water,
  className: "jcvd",
  classNameBubble: "jcvdBubble",
  classNameThird: null,
};

const Bolsonaro = {
  name: "Bolsonaro",
  img: BolsonaroPop,
  slogan: "Grâce à toi, tes enfants connaitront l'Amazonie",
  img2: null,
  img3: BolsonaroBubble,
  className: "bolsonaro",
  classNameBubble: "bolsonaroBubble",
  classNameThird: null,
};

const Aya = {
  name: "Aya",
  img: AyaNaka,
  slogan: "Grâce à toi, on pourra twerker en travaillant son vocabulaire !",
  img2: null,
  img3: AyaBubble,
  className: "aya",
  classNameBubble: "ayaBubble",
  classNameThird: null,
};



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
