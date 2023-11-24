import { createContext, useContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

export const RoutourneContext = createContext();

export function RoutourneProvider({ children }) {
  const personalityOrder = [1, 4, 0, 5, 2, 3];
  const giftOrder = [3, 0, 1, 4, 2, 5];
  const [index, setIndex] = useState(0);
  const [popUpDisplay, setPopUpDisplay] = useState(false);
  const personalities = [
    {
      name: "Zlatan",
      img: "./src/assets/Zlatanreading.png",
      slogan: "Grâce à toi, Zlatan ne parlera plus de lui à la 3ème personne !",
      img2: "./src/assets/modesty.png",
      img3: "./src/assets/ZlatanSpeak.png",
      className: "zlatan",
      classNameBubble: "speak",
      classNameThird: "modesty",
    },
    {
      name: "Aya",
      img: "./src/assets/aya.jpeg",
      slogan: "Grâce à toi, on pourra twerker en travaillant son vocabulaire !",
      img2: null,
      img3: "./src/assets/ayabubble.png",
      className: "aya",
      classNameBubble: "ayaBubble",
      classNameThird: null,
    },
    {
      name: "Bolsonaro",
      img: "./src/assets/bolsonaropop.png",
      slogan: "Grâce à toi, tes enfants connaitront l'Amazonie",
      img2: null,
      img3: "./src/assets/bolsonarobubble.png",
      className: "bolsonaro",
      classNameBubble: "bolsonaroBubble",
      classNameThird: null,
    },
    {
      name: "Macron",
      img: "./src/assets/macrongilet.png",
      slogan: "Grâce à toi, Macron manifeste contre le prix de l'essence !",
      img2: null,
      img3: "./src/assets/macronbubble.png",
      className: "macron",
      classNameBubble: "macronBubble",
      classNameThird: null,
    },
    {
      name: "JCVD",
      img: "./src/assets/jcvd.jpg",
      slogan: "Grâce à toi, il restera peut être encore de l'eau dans 30 ans !",
      img2: null,
      img3: "./src/assets/water.png",
      className: "jcvd",
      classNameBubble: "jcvdBubble",
      classNameThird: null,
    },
    {
      name: "Ribéry",
      img: "./src/assets/riberymanchot.png",
      slogan: "Grâce à toi, la routourne a tourné !",
      img2: null,
      img3: "./src/assets/RiberySpeak.png",
      className: "ribery",
      classNameBubble: "bubbleRibery",
      classNameThird: null,
    },
  ];

  const [reels, setReels] = useState([
    {
      imageSrc: "src/assets/reel-strip2.png",
      symbols: [
        {
          title: "Bolsonaro",
          position: 100,
          weight: 0,
        },
        {
          title: "Zlatan",
          position: 300,
          weight: 5,
        },
        {
          title: "Jean-Claude",
          position: 500,
          weight: 0,
        },
        {
          title: "Franck",
          position: 700,
          weight: 0,
        },
        {
          title: "Aya",
          position: 900,
          weight: 0,
        },
        {
          title: "Emmanuel",
          position: 1100,
          weight: 0,
        },
      ],
    },
    {
      imageSrc: "src/assets/reel-strip1.png",
      symbols: [
        {
          title: "cherry",
          position: 100,
          weight: 0,
        },
        {
          title: "plum",
          position: 300,
          weight: 0,
        },
        {
          title: "reçoit",
          position: 480,
          weight: 5,
        },
        {
          title: "bell",
          position: 700,
          weight: 0,
        },
        {
          title: "cherry",
          position: 900,
          weight: 0,
        },
        {
          title: "plum",
          position: 1100,
          weight: 0,
        },
      ],
    },
    {
      imageSrc: "src/assets/reel-strip0.png",
      symbols: [
        {
          title: "un dictionnaire",
          position: 105,
          weight: 0,
        },
        {
          title: "un bonzaï",
          position: 300,
          weight: 0,
        },
        {
          title: "un pack d'eau",
          position: 500,
          weight: 0,
        },
        {
          title: "la modestie pour les nuls",
          position: 700,
          weight: 5,
        },
        {
          title: "un gilet jaune",
          position: 900,
          weight: 0,
        },
        {
          title: "une roue",
          position: 1100,
          weight: 0,
        },
      ],
    },
    // add more reels ...
  ]);

  useEffect(() => {
    if (index > 0 && index < 6) {
      console.log("index: " + index);
      console.log(giftOrder[index - 1]);
      const newReels = reels;
      newReels[2].symbols[giftOrder[index - 1]].weight = 0;
      newReels[2].symbols[giftOrder[index]].weight = 5;
      newReels[0].symbols[personalityOrder[index - 1]].weight = 0;
      newReels[0].symbols[personalityOrder[index]].weight = 5;
      setReels(newReels);
    }
  }, [index]);

  const contextValue = useMemo(() => {
    return {
      popUpDisplay,
      setPopUpDisplay,
      reels,
      setReels,
      index,
      setIndex,
      personalities,
    };
  }, [popUpDisplay, reels, index]);

  return (
    <RoutourneContext.Provider value={contextValue}>
      {children}
    </RoutourneContext.Provider>
  );
}
RoutourneProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
const useRoutourneContext = () => {
  return useContext(RoutourneContext);
};
export default useRoutourneContext;
