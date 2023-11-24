import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="welcomeContainer">
      <h2 className="welcomeTitle">Bienvenue sur Christmas Jackpot !</h2>
      <p className="description">
        Christmas Jackpot permet d'organiser un "Secret Santa" en vous
        attribuant au hasard une personne puis une suggestion de cadeau à lui
        offrir !
      </p>
      <p className="description">Cliquez sur le bouton PLAY pour commencer</p>
      <Link className="playLink" to="/GamePage">
        <img
          src="src/assets/play.png"
          alt="Bouton jouer"
          className="playButton"
        />
        /{" "}
      </Link>
    </div>
  );
}

export default HomePage;
