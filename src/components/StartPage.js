// CSS
import "../CSS/index.css";
import "../CSS/App.css";

// Icons
import info from "../images/info-icon.svg";
import { randomPath } from "./Shapes.js";

// Particles.js
import Particles from "react-particles";
import { loadFull } from "tsparticles";

// Page redirect & engine callbacks
import React, { useCallback } from "react";

/**
 *
 * @returns {string} - Start page main component.
 */
function Start({ appState, onPlayScreen, onScoreBoard }) {
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
            number: {
              density: { enable: true, area: 800 },
              limit: 0,
              value: 80,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.1,
                speed: 1,
                sync: false,
              },
              random: { enable: true, minimumValue: 0.05 },
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
              value: 15,
              random: {
                enable: true,
                minimumValue: 15,
                value: 15,
              },
            },
            collisions: {
              enable: true,
              mode: "destroy",
            },
          },
          detectRetina: true,
        }}
      ></Particles>
      <div className="titel">
        <h1>Fånga den</h1>
      </div>
      <div
        className="playButton"
        style={{ textAlign: "center" }}
        onClick={onPlayScreen}
      >
        {" "}
        {/*Timer starts when onClick*/}
        <div style={{ textDecoration: "none" }} className="text">
          Spela
        </div>
      </div>

      <div style={{ height: "10px" }}></div>
      <div className="scoreboardButton" onClick={onScoreBoard}>
        <div className="text">Poängtavla</div>
      </div>
      <div>
        <img
          className="infoButton"
          src={info}
          alt="Info"
          width="50px"
          height="50px"
        />
      </div>
    </div>
  );
}

/**
 * Returns component
 */
class StartPage extends React.Component {
  render() {
    return (
      <Start
        appState={this.props.appState}
        onPlayScreen={this.props.onPlayScreen}
        onScoreBoard={this.props.onScoreBoard}
      />
    );
  }
}

export default StartPage;
