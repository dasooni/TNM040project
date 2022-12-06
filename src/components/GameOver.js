import React, { useCallback } from "react";
import "../CSS/Gameover.css";
import "../CSS/App.css";
// Particles.js
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import { randomPath } from "./Shapes.js";

function End({ appState, onPlayScreen, onScoreBoard, onStartScreen }) {
  const particlesInit = useCallback(async (engine) => {
    // Engine belongs to particles.js, uses our own config.
    console.log(engine);
    // This adds the bundle (options) to the engine (particles.js)
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Container belongs to particles.js.
    console.log(container);
  }, []);

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="Particles"
        options={{
          background: {
            color: "#F0E3F0",
          },
          fpsLimit: 120,

          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: true,
              onclick: {
                enable: true,
                mode: "push",
              },
            },
          },
          emitters: {
            position: {
              x: 50,
              y: 100,
            },
            rate: {
              quantity: 2,
              delay: 0.25,
            },
          },
          particles: {
            color: {
              value: [
                "#ffffff",
                "#3998D0",
                "#2EB6AF",
                "#A9BD33",
                "#FEC73B",
                "#F89930",
                "#F45623",
                "#D62E32",
                "#EB586E",
                "#9952CF",
              ],
            },
            collisions: {
              enable: false,
            },
            move: {
              decay: 0.05,
              direction: "top",
              enable: true,
              gravity: {
                enable: true,
                acceleration: 1,
                maxSpeed: 10,
              },
              outModes: {
                top: "none",
                default: "destroy",
              },
              speed: { min: 25, max: 50 },
            },
            number: {
              value: 0,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.1,
                speed: 1,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.05,
              },
              value: 1,
            },
            shape: {
              type: "images",
              stroke: { width: 0, color: "#000000" },
              polygon: { sides: 5 },
              image: [
                { src: randomPath(), width: 100, height: 100 },
                { src: randomPath(), width: 100, height: 100 },
                { src: randomPath(), width: 100, height: 100 },
                { src: randomPath(), width: 100, height: 100 },
                { src: randomPath(), width: 100, height: 100 },
                { src: randomPath(), width: 100, height: 100 },
                { src: randomPath(), width: 100, height: 100 },
                { src: randomPath(), width: 100, height: 100 },
              ],
            },
            size: {
              animation: {
                destroy: "none",
                enable: true,
                minimumValue: 15,
                speed: 40,
                startValue: "max",
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 1,
              },
              value: 5,
            },
          },
        }}
      ></Particles>

      <div id="ease-in">
        <h1 className="gameover-header">Spelet är Slut!</h1>
        <div className="gameover-content">
          <button className="play-again" onClick={onPlayScreen}>
            {/* Måste resetta score */}
            Spela igen
          </button>
          <button className="scoreboard" onClick={onScoreBoard}>
            Poängtavla
          </button>
          <button className="start-again" onClick={onStartScreen}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
}
class GameOver extends React.Component {
  render() {
    return (
      <End
        appState={this.props.appState}
        onPlayScreen={this.props.onPlayScreen}
        onScoreBoard={this.props.onScoreBoard}
        onStartScreen={this.props.onStartScreen}
      />
    );
  }
}
export default GameOver;
