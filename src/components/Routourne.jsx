import React from "react";
import SlotMachine from "react-slot-machine-gen";

const reels = [
  {
    imageSrc: "src/assets/reel-strip2.png",
    symbols: [
      {
        title: "Bolsonaro",
        position: 100,
        weight: 0,
      },
      {
        title: "Zlatan",
        position: 300,
        weight: 5,
      },
      {
        title: "Jean-Claude",
        position: 500,
        weight: 0,
      },
      {
        title: "Franck",
        position: 700,
        weight: 0,
      },
      {
        title: "Aya",
        position: 900,
        weight: 0,
      },
      {
        title: "Emmanuel",
        position: 1100,
        weight: 0,
      },
    ],
  },

  {
    imageSrc: "src/assets/reel-strip1.png",
    symbols: [
      {
        title: "cherry",
        position: 100,
        weight: 0,
      },
      {
        title: "plum",
        position: 300,
        weight: 0,
      },
      {
        title: "reçoit",
        position: 480,
        weight: 5,
      },
      {
        title: "bell",
        position: 700,
        weight: 0,
      },
      {
        title: "cherry",
        position: 900,
        weight: 0,
      },
      {
        title: "plum",
        position: 1100,
        weight: 0,
      },
    ],
  },
  {
    imageSrc: "src/assets/reel-strip0.png",
    symbols: [
      {
        title: "un dictionnaire",
        position: 105,
        weight: 0,
      },
      {
        title: "un bonzaï",
        position: 300,
        weight: 0,
      },
      {
        title: "un pack d'eau",
        position: 500,
        weight: 0,
      },
      {
        title: "la modestie pour les nuls",
        position: 700,
        weight: 5,
      },
      {
        title: "un gilet jaune",
        position: 900,
        weight: 0,
      },
      {
        title: "une roue",
        position: 1100,
        weight: 0,
      },
    ],
  },
  // add more reels ...
];

export default class Demo extends React.Component {
  constructor() {
    super();

    this.state = {
      play: false,
    };
  }

  playEvent() {
    this.setState({
      play: !this.state.play,
    });
  }

  callback(symbols) {
    if (symbols[0].title === "Aya" && symbols[2].title === "un dictionnaire") {
      console.info("You're a winner!");
    }
  }

  render() {
    return (
      <div className="jackpot">
        <React.Fragment>
          <SlotMachine
            reels={reels}
            play={this.state.play}
            callback={this.callback}
          />

          <button id="play-button" onClick={() => this.playEvent()}>
            Play
          </button>
        </React.Fragment>
      </div>
    );
  }
}
