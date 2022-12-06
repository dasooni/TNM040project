// Dependencies
import React, { useState } from "react";

// CSS
import "./CSS/App.css";

// Components
import StartPage from "./components/StartPage";
import PlayScreen from "./components/PlayScreen";
import Scoreboard from "./components/Scoreboard";
import GameOver from "./components/GameOver";

function App() {
  const [appState, setAppState] = useState("start");
  const [scores, setScores] = useState([]);

  const addScore = (newScore) => {
    setScores([...scores, newScore]);
    setAppState("score");
  };

  console.log("1", "appState", appState);
  switch (appState) {
    case "start":
      // This is what changes the state of the app.
      return (
        <StartPage
          onPlayScreen={() => setAppState("playing")}
          onScoreBoard={() => setAppState("score")}
          onFinishedGame={() => setAppState("gameover")}
        />
      );

    case "playing":
      // return <PlayScreen onFinishedGame={addScore}></PlayScreen>;
      return <PlayScreen onFinishedGame={() => setAppState("gameover")} />;

    case "score":
      return (
        <Scoreboard GoBackToStart={() => setAppState("start")}>'</Scoreboard>
      );

    case "gameover":
      return (
        <GameOver
          onPlayScreen={() => setAppState("playing")}
          onScoreBoard={() => setAppState("score")}
          onStartScreen={() => setAppState("start")}
        ></GameOver>
      );

    default:
      break;
  }
  return <div>ERROR</div>;
}
export default App;
