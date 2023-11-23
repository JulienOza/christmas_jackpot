import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const RoutourneContext = createContext();

export function RoutourneProvider({ children }) {
  const personalityOrder = [1, 4, 0, 3, 5, 2];
  const giftOrder = [];
  const [zlatan, setZlatan] = useState(false);
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

  const contextValue = useMemo(() => {
    return {
      zlatan,
      setZlatan,
      reels,
      setReels,
    };
  }, [zlatan, reels]);

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
