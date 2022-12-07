/* eslint-disable jsx-a11y/anchor-is-valid */
import Timebar from "../components/Timebar";
import React, { useState, useEffect } from "react";
import { RandomShape } from "./Shapes.js";
import "../CSS/index.css";

import rightFruit from "../sounds/sucess.mp3";
import levelTheme from "../sounds/levelTheme.wav";

const getRandomPosition = () => {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  return {
    x: x,
    y: y,
    left: x + "%",
    top: y + "%",
  };
};

const generatePositions = (numberofShapes = 10) => {
  let positions = [];
  let newPos;
  console.log("101", "Number of shapes: ", numberofShapes);

  let limit = 10000;
  while (positions.length < numberofShapes && limit-- > 0) {
    if (positions.length === 0) {
      newPos = getRandomPosition();
      positions.push(newPos);
      console.log("107", "First position: ", newPos);
    } else {
      newPos = getRandomPosition();
      let collision = false;
      for (let i = 0; i < positions.length; i++) {
        if (
          Math.abs(positions[i].x - newPos.x) < 15 &&
          Math.abs(positions[i].y - newPos.y) < 15
        ) {
          collision = true;
          console.log("115", "Collision: ", collision);
        }
      }
      if (!collision) {
        positions.push(newPos);
        console.log(
          "117",
          "New position:",
          newPos.x.toFixed(),
          newPos.y.toFixed()
        );
      }
    }
  }
  if (limit <= 0) {
    console.warn("404", "ENDLESS LOOP");
  }

  return positions;
};

let score = 0;
const plus = 10;

function Play({ appState, onFinishedGame }) {
  const [showBar, setShowBar] = useState(true);
  const [shapes, setShapes] = useState(generatePositions());
  console.log("Refresh PlayScreen", shapes);

  const [answer, setAnswer] = useState(RandomShape());
  const [right, setRight] = useState(generatePositions(1));

  const [timeLeft, setTimeLeft] = useState(5);

  let sucess = new Audio(rightFruit);

  const isGameOver = () => {
    console.log("0", "Game is over");
    onFinishedGame();
  };

  useEffect(() => {
    if (!showBar) {
      setShowBar(true);
    }
  }, [showBar]);

  const onClickFruit = (shape) => {
    if (answer.id === shape.id) {
      setTimeLeft(5);
      setShowBar(false);
      setShapes(generatePositions());

      sucess.play();
      score += plus;

      setAnswer(RandomShape());
      setRight(generatePositions(1));
    } else {
      if (score > 100) {
        const name = window.prompt("Name: ");
        const myData = { name: name, score: score };

        let oldArray = JSON.parse(window.localStorage.getItem("data"));

        if (oldArray == null) {
          oldArray = [];
        }
        oldArray.push(myData);
        window.localStorage.setItem("data", JSON.stringify(oldArray));
      }
      //localStorage.clear();
      score = 0;
      onFinishedGame();
    }
  };

  return (
    <div className="headerOne">
      <div>
        <Timebar
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
          restartBar={showBar}
          onGameOver={isGameOver}
        />
      </div>
      <h1>
        {" "}
        Fånga{" "}
        <a onClick={onClickFruit}>
          <img src={answer.src} alt="fruit" height="80px" />
        </a>
      </h1>
      <p> Poäng: {score} </p>
      <div className="game">
        {shapes.map((position) => {
          const shape = RandomShape();
          return (
            <div>
              <div
                style={position}
                className="fruits"
                onClick={() => onClickFruit(shape)}
              >
                <img src={shape.src} alt="fruit" height="80px" />
              </div>
            </div>
          );
        })}
        {right.map((position) => {
          const shape = answer;
          return (
            <div>
              <div
                style={position}
                className="fruits"
                onClick={() => onClickFruit(shape)}
              >
                <img src={shape.src} alt="fruit" height="80px" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

class PlayScreen extends React.Component {
  render() {
    return (
      <Play
        appState={this.props.appState}
        onFinishedGame={this.props.onFinishedGame}
      />
    );
  }
}
export default PlayScreen;
