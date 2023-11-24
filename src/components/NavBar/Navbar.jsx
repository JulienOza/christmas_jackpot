import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="mainHeader">
      <h1 className="mainTitle">❄️ 🎁 Christmas Jackpot 🎁 ❄️</h1>
      <Link to="/AboutUs" type="button" className="aboutButton">
        A propos
      </Link>
    </header>
  );
}

export default Navbar;
