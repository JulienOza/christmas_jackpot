import ZlatanRead from "../../assets/Zlatanreading.png";
import Modesty from "../../assets/modesty.png";
import ZlatanSpeak from "../../assets/ZlatanSpeak.png";
import useRoutourneContext from "../../contexts/RoutourneContext";
import "./PopUpFinal.css";

function PopUpFinal() {
  const { setZlatan } = useRoutourneContext();
  return (
    <>
      <article className="message">
        <h1 className="finalmessage">
          Grâce à toi, Zlatan ne parlera plus de lui à la troisième personne !
        </h1>
        <img
          src={ZlatanRead}
          className="zlatan"
          alt="Zlatan Ibrahimovic en train de lire"
        />
        <img
          src={Modesty}
          className="modesty"
          alt="Zlatan Ibrahimovic en train de lire"
        />
        <img
          src={ZlatanSpeak}
          className="speak"
          alt="Zlatan Ibrahimovic parle"
        />
        <button
          type="button"
          aria-label="Boutton pour fermer la pop-up"
          className="closeButton"
          onClick={() => setZlatan(false)}
        >
          X
        </button>
      </article>
    </>
  );
}

export default PopUpFinal;
