import Timebar from "../components/Timebar";
import React, { useState, useEffect, useCallback } from "react";
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

// const Timer = ({ seconds }) => {
//     const [timeLeft, setTimeLeft] = useState(seconds);

//     useEffect(() => {
//       if(!timeLeft ) {
//         setTimeLeft(5);
//         return;
//       }

//       const intervalId = setTimeout(() => {
//         setTimeLeft(timeLeft - 1);
//       }, 1000);

//       return () => clearTimeout(intervalId);

//     }, [timeLeft]);

//     return (
//         <div>
//             <h1>{timeLeft}</h1>
//         </div>
//     )
//   }

let score = 0;
const plus = 10;

/**
 *
 * @returns {string} - Start page main component.
 */
function Play({ appState, onFinishedGame, onScoreBoard }) {
  const [showBar, setShowBar] = useState(true);
  const [shapes, setShapes] = useState(generatePositions());
  console.log("Refresh PlayScreen", shapes);
  const [answer, setAnswer] = useState(RandomShape());
  const [right, setRight] = useState(generatePositions(1));

  // const [timeLeft, setTimeLeft] = useState(seconds);

  // useEffect(() => {
  //   if(!timeLeft) {
  //     setTimeLeft(5);
  //     return;
  //   }

  //   const intervalId = setTimeout(() => {
  //     setTimeLeft(timeLeft - 1);
  //   }, 1000);

  //   return () => clearTimeout(intervalId);

  // }, [timeLeft]);

  // return (
  //     <div>
  //         <h1>{timeLeft}</h1>
  //     </div>
  // )

  // const [sec, setSec] = useState(
  //   setTimeout(function () {
  //     //GAMEOVER
  //     <GameOver></GameOver>;
  //     console.log("EEEEEENNNNND");
  //     //Koppla till gameover sidan mha usestate
  //   }, 5000)
  // );

  useEffect(() => {
    if (!showBar) {
      setShowBar(true);
    }
  }, [showBar]);

  const onClickFruit = (shape) => {
    setTimeout(function () {
      //GAMEOVER

      console.log("EEEEEENNNNND");
      {
        onFinishedGame();
      }
    }, 5000);

    if (answer.id === shape.id) {
      s;
      clearTimeout(function () {}); //Funkar ej korrekt RESETar ej??
      setShowBar(false);
      setShapes(generatePositions());

      //setTimeLeft(5);
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
    } else if (answer.id != shape.id) {
      score = score - 5;

      {
        onFinishedGame();
      }
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
        {/* <Timer seconds = {5} /> */}
        {/* <div className="scoreboardButton" onClick={onFinishedGame}> </div> */}
      </div>
      <h1>
        {" "}
        Fånga{" "}
        <a onClick={onClickFruit}>
          <img src={answer.src} alt="fruit" height="80px" />
        </a>
      </h1>
      <p> Poäng: {score}</p>

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

export function PlayScore() {
  return score;
}

class PlayScreen extends React.Component {
  render() {
    return (
      <Play
        appState={this.props.appState}
        onFinishedGame={this.props.onFinishedGame}
        onScoreBoard={this.props.onScoreBoard}
      />
    );
  }
}
export default Play;
