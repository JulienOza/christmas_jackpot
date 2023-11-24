import Navbar from "../components/NavBar/Navbar";
import { useState } from "react";
import Routourne from "./Routourne";
import CoinMachine from "../assets/coinMachine.png";
import "./GamePage.css";
import Bar from "../assets/bar.png";
import EndPopUp from "./EndPopUp";

function GamePage() {
  const [isClicked, setIsClicked] = useState(false);
  const handleButtonClick = () => {
    setIsClicked(!isClicked);
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
    setTimeout(() => {
      simulateClick(100, 100);
    }, 1000);
  };

  // Fonction pour générer un clic à une coordonnée spécifique
  function simulateClick(x, y) {
    const event = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      clientX: x,
      clientY: y,
    });

    // Remplacez "targetElement" par la référence de l'élément sur lequel vous souhaitez déclencher le clic
    const targetElement = document.querySelector(".reel");
    targetElement.dispatchEvent(event);
  }

  return (
    <>
      <div className="gameContainer">
        <Navbar />
        <img src={CoinMachine} className="coinMachine" />
        <button type="button" className={`handleBar ${isClicked ? "clicked" : ""}`} onClick={handleButtonClick}>
          <img src={Bar} alt="Bar" className="bar" />
        </button>
        <Routourne />
      </div>
      <EndPopUp />
      <div className="container">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="350" height="400">
          <path fill="transparent" d="M0 0h350v400H0z" />
          <g fill="#CCE6F4" className="cloud">
            <path d="M63 53h65a13 13 0 0113 13 13 13 0 01-13 13H61a12 12 0 01-12-12 14 14 0 0114-14z" />
            <path d="M83 26a19 19 0 0119 19v1a19 19 0 01-19 19h-2a18 18 0 01-18-18v-1a20 20 0 0120-20z" />
            <path d="M113 38a14 14 0 0114 14v1a14 14 0 01-14 14h-2a13 13 0 01-13-13v-1a15 15 0 0115-15z" />
          </g>
          <g fill="#CCE6F4" className="cloud">
            <path d="M202.936 343.907h52.943a10.589 10.589 0 0110.588 10.589 10.589 10.589 0 01-10.588 10.588h-54.572a9.774 9.774 0 01-9.774-9.774 11.403 11.403 0 0111.403-11.403z" />
            <path d="M219.226 321.916a15.476 15.476 0 0115.476 15.475v.815a15.476 15.476 0 01-15.476 15.475h-1.629a14.661 14.661 0 01-14.661-14.66v-.815a16.29 16.29 0 0116.29-16.29z" />
            <path d="M243.661 331.69a11.403 11.403 0 0111.403 11.403v.814a11.403 11.403 0 01-11.403 11.403h-1.629a10.589 10.589 0 01-10.588-10.588v-.815a12.218 12.218 0 0112.217-12.217z" />
          </g>
          <g fill="#CCE6F4" className="cloud">
            <path d="M12.936 245.907h52.943a10.589 10.589 0 0110.588 10.589 10.589 10.589 0 01-10.588 10.588H11.307a9.774 9.774 0 01-9.774-9.774 11.403 11.403 0 0111.403-11.403z" />
            <path d="M29.226 223.916a15.476 15.476 0 0115.476 15.475v.815a15.476 15.476 0 01-15.476 15.475h-1.629a14.661 14.661 0 01-14.661-14.66v-.815a16.29 16.29 0 0116.29-16.29z" />
            <path d="M53.661 233.69a11.403 11.403 0 0111.403 11.403v.814a11.403 11.403 0 01-11.403 11.403h-1.629a10.589 10.589 0 01-10.588-10.588v-.815A12.218 12.218 0 0153.66 233.69z" />
          </g>
          <g fill="#CCE6F4" className="cloud">
            <path d="M246.79835,143.07881h75.40328a15.04912,15.04912,0,0,1,15.04912,15.04912v0a15.0491,15.0491,0,0,1-15.0491,15.0491H244.79837a14.04912,14.04912,0,0,1-14.04912-14.04912v0A16.0491,16.0491,0,0,1,246.79835,143.07881Z" />
            <path d="M269.00509,111.82294h2.04917a21.04912,21.04912,0,0,1,21.04912,21.04912v3.04917a21.04909,21.04909,0,0,1-21.04909,21.04909h-4.04917A20.04912,20.04912,0,0,1,246.956,136.9212V133.872a22.04909,22.04909,0,0,1,22.04909-22.04909Z" />
            <path d="M304.522,125.71444h.47291A16.04912,16.04912,0,0,1,321.044,141.76356v1.47291a16.0491,16.0491,0,0,1-16.0491,16.0491H302.522a15.04912,15.04912,0,0,1-15.04912-15.04912v-1.47291A17.0491,17.0491,0,0,1,304.522,125.71444Z" />
          </g>
          <g className="plane">
            <rect x="215.747" y="157.738" width="25.511" height="43.645" rx="12.755" ry="12.755" fill="#711723" />
            <path fill="#f40009" d="M166.263 185.401h74.995v31.965h-74.995zM166.263 217.366h74.995a31.965 31.965 0 01-31.965 31.965h-43.03v-31.965z" />
            <g className="hand">
              <rect x="136.437" y="152.836" width="26.365" height="9.113" rx="4.557" ry="4.557" transform="rotate(-120 149.62 157.393)" fill="#f6bfb1" />
              <path fill="#f40009" d="M144.906 163.746l11.978-6.916 20.407 35.346-11.978 6.916z" />
              <rect x="139.226" y="154.214" width="20.172" height="6.973" rx="3.486" ry="3.486" transform="rotate(-30 149.312 157.7)" fill="#e6e6e6" />
            </g>
            <path fill="#f6bfb1" d="M171.488 155.28h37.805v23.974h-37.805z" />
            <path
              d="M165.956 185.093v64.545h-12.602v-.024c-.406.015-.818.024-1.23.024a32.272 32.272 0 110-64.545c.412 0 .824.01 1.23.025v-.025z"
              fill="#711723"
            />
            <path fill="#300403" d="M161.345 185.093h4.918v64.545h-4.918z" />
            <path d="M113.376 210.296v11.987h-2.34v-.004a6.053 6.053 0 01-.23.004 5.993 5.993 0 110-11.987c.077 0 .154.002.23.005v-.005z" fill="#f40009" />
            <g fill="#300403">
              <circle cx="155.505" cy="244.106" r="2.459" />
              <circle cx="155.505" cy="190.933" r="2.459" />
              <circle cx="155.505" cy="208.452" r="2.459" />
              <circle cx="155.505" cy="226.586" r="2.459" />
            </g>
            <rect className="blade" x="113.244" y="167.266" width="6.762" height="98.354" rx="3.381" ry="3.381" fill="#300403" />
            <path
              d="M195.154 211.526h34.732a4.918 4.918 0 014.917 4.918 4.918 4.918 0 01-4.917 4.917h-34.732a4.918 4.918 0 01-4.917-4.917 4.918 4.918 0 014.917-4.918z"
              fill="#711723"
            />
            <g fill="#fff">
              <rect x="174.148" y="171.282" width="15.925" height="40.192" rx="7.963" ry="7.963" />
              <rect x="188.824" y="171.282" width="15.925" height="40.192" rx="7.963" ry="7.963" />
              <rect x="180.862" y="167.691" width="15.925" height="51.21" rx="7.963" ry="7.963" transform="rotate(-90 188.824 193.296)" />
              <path d="M161.55 180.896a7.963 7.963 0 016.42-9.252l20.066-3.625a7.963 7.963 0 019.251 6.42 7.963 7.963 0 01-6.42 9.251l-20.066 3.626a7.963 7.963 0 01-9.251-6.42z" />
              <path d="M183.122 174.543a7.963 7.963 0 019.251-6.42l19.491 3.521a7.963 7.963 0 016.42 9.252 7.963 7.963 0 01-9.251 6.42l-19.491-3.522a7.963 7.963 0 01-6.42-9.25z" />
            </g>
            <rect x="167.185" y="151.899" width="6.455" height="27.355" rx="3.227" ry="3.227" fill="#711723" />
            <rect x="207.449" y="151.899" width="6.455" height="27.355" rx="3.227" ry="3.227" fill="#711723" />
            <circle cx="190.083" cy="165.883" r="3.842" fill="#e76160" />
            <circle cx="190.083" cy="179.868" r="6.454" />
            <path
              fill="#f40009"
              d="M167.185 148.21h46.718v7.069h-46.718zM213.903 145.137h-46.718a10.757 10.757 0 0110.757-10.758h25.204a10.757 10.757 0 0110.757 10.758z"
            />
            <path fill="#711723" d="M167.185 143.907h46.718v4.303h-46.718z" />
            <circle cx="181.016" cy="146.059" r="7.377" fill="#711723" />
            <circle cx="181.016" cy="146.059" r="5.62" fill="#300403" />
            <circle cx="200.072" cy="146.059" r="7.377" fill="#711723" />
            <circle cx="200.072" cy="146.059" r="5.62" fill="#300403" />
            <path d="M176.713 165.422s2.459-3.995 6.454 0M197.306 165.422s2.459-3.995 6.454 0" fill="none" stroke="#000" />
          </g>
        </svg>
      </div>
    </>
  );
}

export default GamePage;
