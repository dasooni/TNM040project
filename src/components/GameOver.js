import React, {useState} from "react";
import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";

import "../CSS/Gameover.css";

// Particles.js
// import Particles from 'react-particles';
// import { loadFull } from "tsparticles";

function End({appState, onPlayScreen, onScoreBoard, onStartScreen}) {
    return (
        <div id = "ease-in">
            <div onClick={onPlayScreen}>Play Again</div>
            <div onClick={onScoreBoard}>Scoreboard</div>
            <div onClick={onStartScreen}>Start Screen</div>
        </div>
    )
}
class GameOver extends React.Component {
        render() {
            return (
                <End appState={this.props.appState}
                onPlayScreen={this.props.onPlayScreen}
                onScoreBoard = {this.props.onScoreBoard}
                onStartScreen = {this.props.onStartScreen} 
                />
            );
        }
    }
export default GameOver;