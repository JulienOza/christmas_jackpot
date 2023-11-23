import { useState } from "react";
// import ZlatanRead from "../../assets/Zlatanreading.png";
// import ZlatanSpeak from "../../assets/ZlatanSpeak.png";
import "./PopUpFinal.css";
import { PropTypes } from "prop-types";

function PopUpFinal({ img, slogan, img3, className, classNameBubble, img2, classNameThird }) {
  const [popupMessage, setPopupMessage] = useState("");

  console.log({ img }, { img3 });

  return (
    <>
      <button
        type="button"
        className="targetButton"
        aria-label="Image de fin du jeu"
        onClick={() =>
          setPopupMessage(
            <article className="message">
              <h1 className="finalmessage">{slogan}</h1>
              <img src={img} className={`${className}`} alt="Zlatan Ibrahimovic en train de lire" />
              <img src={img2} className={`${classNameThird}`} alt="Zlatan Ibrahimovic en train de lire" />
              <img src={img3} className={`${classNameBubble}`} alt="Zlatan Ibrahimovic parle" />
              <button type="button" aria-label="Boutton pour fermer la pop-up" className="closeButton" onClick={() => setPopupMessage("")}>
                X
              </button>
            </article>
          )
        }
      >
        Lancez la machine !
      </button>
      {popupMessage}
    </>
  );
}

PopUpFinal.propTypes = {
  slogan: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  img3: PropTypes.string.isRequired,
  img2: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  classNameBubble: PropTypes.string.isRequired,
  classNameThird: PropTypes.string.isRequired,
};

export default PopUpFinal;
