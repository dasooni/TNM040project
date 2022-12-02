import Timebar from "../components/Timebar";
import React, { useState, useEffect } from "react";
import { RandomShape } from "./Shapes.js";
import "../CSS/index.css";
import GameOver from "../components/GameOver";

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

const generatePositions = (numberofShapes = 15) => {
  let positions = [];
  let newPos;
  console.log("101", "Number of shapes: ", numberofShapes);

  let limit = 10000;
  while (positions.length < numberofShapes && limit-- > 0) {
    if (positions.length == 0) {
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

function PlayScreen({ onFinishedGame }) {
  const [showBar, setShowBar] = useState(true);
  const [shapes, setShapes] = useState(generatePositions());
  console.log("Refresh PlayScreen", shapes);
  const [answer, setAnswer] = useState(RandomShape());
  const [right, setRight] = useState(generatePositions(1));
  const [sec, setSec] = useState(
    setTimeout(function () {
      //GAMEOVER
      <GameOver></GameOver>;
      console.log("EEEEEENNNNND");
      //Koppla till gameover sidan mha usestate
    }, 5000)
  );

  useEffect(() => {
    if (!showBar) {
      setShowBar(true);
    }
  }, [showBar]);

  const onClickFruit = (shape) => {
    if (answer.id === shape.id) {
      //alert("Good job!")
      //onFinishedGame({name: "foo", score: 1000})
      setTimeout(function () {
        //GAMEOVER
        <GameOver></GameOver>;
        console.log("EEEEEENNNNND");
        //Koppla till gameover sidan mha usestate
      }, 5000);

      clearTimeout(setTimeout(function () {}));
      setShowBar(false);
      setShapes(generatePositions());

      if (score < 0) {
        score = 0;
      }
      score += plus;

      setAnswer(RandomShape());
      setRight(generatePositions(1));

      console.log("120", "Score", score);
      console.log("121", "Answer", setShowBar);
      console.log("122", "Shapes", setShapes);
      console.log("123", "Answer", setAnswer);
      console.log("124", "Right", setRight);
      // setInterval(function(){ score-- }, 5000);
      // clearInterval(setInterval);
    } else {
      score = score - 5;
    }
  };

  // setTimeout(function(){ score -= 10 }, 500);
  // setTimeout(function(){ score -= 10 }, 1000);
  // setTimeout(function(){ score -= 10 }, 1500);
  // setTimeout(function(){ score -= 10 }, 2000);
  //   setTimeout(function () {
  //     //GAMEOVER
  //     <GameOver></GameOver>;
  //     console.log("EEEEEENNNNND");
  //     //Koppla till gameover sidan mha usestate
  //   }, 5000);

  return (
    <div className="headerOne">
      <div>
        <Timebar visible={showBar} onTimer={console.log} />
      </div>
      <h1>
        {" "}
        Fånga{" "}
        <a onClick={onClickFruit}>
          <img src={answer.src} alt="fruit" height="80px" />
        </a>
      </h1>
      <p> Poäng: {score} </p>
      {/* <p>___________________________________________________________________ </p> */}
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
export default PlayScreen;
