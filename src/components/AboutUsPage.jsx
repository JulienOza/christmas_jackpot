import { Link } from "react-router-dom";
import Cyril from "../assets/Cyril.jpeg";
import PA from "../assets/Pierre-Adrien.jpeg";
import Julien from "../assets/Julien.jpg";
import Lucas from "../assets/Lucas.jpeg";
import CardProfil from "./CardProfil";
import "./AboutUsPage.scss";

function AboutUsPage() {
  const profils = [
    {
      name: "Pierre Adrien GOUILLART",
      imgSrc: PA,
    },
    {
      name: "Cyril DABURON",
      imgSrc: Cyril,
    },
    {
      name: "Julien Ozarowski",
      imgSrc: Julien,
    },
    {
      name: "Lucas Merino",
      imgSrc: Lucas,
    },
  ];
  return (
    <>
      <main className="cardContainer">
        {profils.map((e) => (
          <CardProfil key={e.name} name={e.name} img={e.imgSrc} github={e.github} linkedin={e.linkedin} />
        ))}
        <Link to="/GamePage" type="button" className="returnButton">
          ↩
        </Link>
        <ul className="lightrope">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="sleigh-santa">
  <div className="santa santa--sleigh">
    <div className="santa__hat">
      <div className="santa__hat-part"></div>
      <div className="santa__hat-part"></div>
    </div>
    <div className="santa__face">
      <div className="santa__eyebrows santa__eyebrows--right"></div>
      <div className="santa__eyebrows santa__eyebrows--left"></div>
      <div className="santa__eye santa__eye--right"></div>
      <div className="santa__eye santa__eye--left"></div>
      <div className="santa__nose"></div>
      <div className="santa__cheek santa__cheek--right"></div>
      <div className="santa__cheek santa__cheek--left"></div>
      <div className="santa__beard">
        <div className="santa__beard-part"></div>
        <div className="santa__beard-part"></div>
        <div className="santa__beard-part"></div>
      </div>
      <div className="santa__mouth"></div>
    </div>
    <div className="santa__body">
      <div className="santa__body-top"></div>
      <div className="santa__hand santa__hand--left">
        <div className="santa__hand-inner"></div>
      </div>
      <div className="santa__hand santa__hand--right"></div>
    </div>
  </div>
  <div className="sleigh-feet"></div>
  <div className="lead">
    <div className="lead-inner"></div>
  </div>
  <div className="lead lead--back">
    <div className="lead-inner"></div>
  </div>  
  <div className="reindeer">
    <div className="reindeer__face">
      <div className="reindeer__ear"></div>
      <div className="reindeer__horn reindeer__horn--right"></div>
      <div className="reindeer__horn reindeer__horn--left"></div>
    </div>
    <div className="reindeer__body">
      <div className="reindeer__foot reindeer__foot--front">
        <div className="reindeer__foot-inner"></div>
      </div>
      <div className="reindeer__foot reindeer__foot--front reindeer__foot--inside">
        <div className="reindeer__foot-inner"></div>
      </div>
      <div className="reindeer__foot reindeer__foot--back">
        <div className="reindeer__foot-inner"></div>
      </div>
      <div className="reindeer__foot reindeer__foot--back reindeer__foot--inside">
        <div className="reindeer__foot-inner"></div>
      </div>
      <div className="reindeer__tail"></div>
      <div className="reindeer__spots"></div>
    </div>
  </div>
  <div className="particles"></div>
</div>

      </main>
    </>


  );


}






export default AboutUsPage;
