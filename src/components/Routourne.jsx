import PopUpFinal from "./PopUpFinal";
import useRoutourneContext from "../contexts/RoutourneContext";
import SlotMachine from "react-slot-machine-gen";

function Routourne() {
  const {
    reels,
    popUpDisplay,
    setPopUpDisplay,
    index,
    setIndex,
    personalities,
  } = useRoutourneContext();

  const callback = (symbols) => {
    console.log(symbols);
    setTimeout(() => {
      setPopUpDisplay(true);
    }, 2000);
    setIndex((index) => index + 1);
  };

  return (
    reels && (
      <>
        <div className="jackpot">
          <SlotMachine reels={reels} callback={callback} />
        </div>
        {popUpDisplay && index < 7 && (
          <PopUpFinal personality={personalities[index - 1]} />
        )}
      </>
    )
  );
}

export default Routourne;
