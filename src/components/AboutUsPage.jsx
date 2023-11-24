import Cyril from "../assets/Cyril.jpeg";
import PA from "../assets/Pierre-Adrien.jpeg";
import Julien from "../assets/Julien.jpg";
import Lucas from "../assets/Lucas.jpeg";
import CardProfil from "./CardProfil";
import "./AboutUsPage.css";

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
      </main>
    </>
  );
}

export default AboutUsPage;
