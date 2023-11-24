import { PropTypes } from "prop-types";
import "./CardProfil.css";

function CardProfil({ name, img }) {
  return (
    <article className="cardProfil">
      <img className="imgProfil" src={img} alt={`${name}`} />
      <h2>{name}</h2>
    </article>
  );
}
CardProfil.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default CardProfil;
