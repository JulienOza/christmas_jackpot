import PopUpFinal from "./PopUpFinal/PopUpFinal";
import useRoutourneContext from "../contexts/RoutourneContext";

import SlotMachine from "react-slot-machine-gen";

function Routourne() {
  const { reels, setReels, zlatan, setZlatan } = useRoutourneContext();

  const callback = (symbols) => {
    console.log(symbols);
    if (
      symbols[0].title === "Zlatan" ||
      symbols[0].title === "la modestie pour les nuls" ||
      symbols[0].title === "reçoit"
    ) {
      setZlatan(true);
      const newReels = reels;
      newReels[2].symbols[3].weight = 0;
      newReels[0].symbols[4].weight = 5;
      newReels[2].symbols[0].weight = 5;
      setReels(newReels);
    }
  };

  return (
    reels && (
      <>
        <div className="jackpot">
          <SlotMachine reels={reels} callback={callback} />
        </div>
        {zlatan && <PopUpFinal />}
      </>
    )
  );
}

export default Routourne;
