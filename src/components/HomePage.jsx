import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="welcomeContainer">
      <h2 className="welcomeTitle">Bienvenue sur le Jackpot de Noël!!!</h2>
      <p className="description">
        Le jackpot de Noël vous permet d'organiser un "secret Santa" vous
        attribuant au hasard un cadeau à offrir et une personne à qui offrir ce
        présent. Cliquez sur le bouton PLAY pour commencer
      </p>
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
