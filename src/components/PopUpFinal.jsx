import "./PopUpFinal.css";
import { PropTypes } from "prop-types";
import useRoutourneContext from "../contexts/RoutourneContext";

function PopUpFinal({ personality }) {
  const {
    img,
    slogan,
    img3,
    className,
    classNameBubble,
    img2,
    classNameThird,
  } = personality;
  const { setPopUpDisplay } = useRoutourneContext();
  console.log({ img }, { img3 });

  return (
    <>
      <article className="message">
        <h1 className="finalmessage">{slogan}</h1>
        <img src={img} className={`${className}`} alt="" />
        <img src={img2} className={`${classNameThird}`} alt="" />
        <img src={img3} className={`${classNameBubble}`} alt="" />
        <button
          type="button"
          aria-label="Boutton pour fermer la pop-up"
          className="closeButton"
          onClick={() => setPopUpDisplay(false)}
        >
          X
        </button>
      </article>
    </>
  );
}

PopUpFinal.propTypes = {
  personality: PropTypes.object.isRequired,
};

export default PopUpFinal;
