import Navbar from "../components/NavBar/Navbar";

import PopUpFinal from "./PopUpFinal";
import RiberyManchot from "../assets/RiberyManchot.png";
import RiberySpeak from "../assets/RiberySpeak.png";
import ZlatanPop from "../assets/Zlatanreading.png";
import ZlatanSpeak from "../assets/ZlatanSpeak.png";
import Modesty from "../assets/Modesty.png";
import MacronGilet from "../assets/MacronGilet.png";
import MacronBubble from "../assets/MacronBubble.png";
import JcvdWater from "../assets/JCVD.jpg";
import Water from "../assets/Water.png";
import BolsonaroPop from "../assets/BolsonaroPop.png";
import BolsonaroBubble from "../assets/BolsonaroBubble.png";
import AyaNaka from "../assets/Aya.jpeg";
import AyaBubble from "../assets/AyaBubble.png";
import PopUpFinal from "./PopUpFinal/PopUpFinal";
import CoinMachine from "../assets/coinMachine.png";
import "./GamePage.css"

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
  return (
    <div className="gameContainer">
      <Navbar />
    <img src={CoinMachine} className="coinMachine"/>
      <PopUpFinal
        img={Ribery.img}
        img2={Ribery.img2}
        slogan={Ribery.slogan}
        img3={Ribery.img3}
        className={Ribery.className}
        classNameBubble={Ribery.classNameBubble}
      />
      <PopUpFinal
        img={Zlatan.img}
        img2={Zlatan.img2}
        slogan={Zlatan.slogan}
        img3={Zlatan.img3}
        className={Zlatan.className}
        classNameBubble={Zlatan.classNameBubble}
        classNameThird={Zlatan.classNameThird}
      />
      <PopUpFinal
        img={Macron.img}
        img2={Macron.img2}
        slogan={Macron.slogan}
        img3={Macron.img3}
        className={Macron.className}
        classNameBubble={Macron.classNameBubble}
      />
      <PopUpFinal img={Jcvd.img} img2={Jcvd.img2} slogan={Jcvd.slogan} img3={Jcvd.img3} className={Jcvd.className} classNameBubble={Jcvd.classNameBubble} />
      <PopUpFinal
        img={Bolsonaro.img}
        img2={Bolsonaro.img2}
        slogan={Bolsonaro.slogan}
        img3={Bolsonaro.img3}
        className={Bolsonaro.className}
        classNameBubble={Bolsonaro.classNameBubble}
      />
      <PopUpFinal img={Aya.img} img2={Aya.img2} slogan={Aya.slogan} img3={Aya.img3} className={Aya.className} classNameBubble={Aya.classNameBubble} />
    </>
     

    
  );
}

export default GamePage;
