import React from "react";

function End(props) {
    return (
        <div>
            <h1>Game Over</h1>
            <button onClick={props.onPlayScreen}>Play Again</button>
            <button onClick={props.onScoreBoard}>Scoreboard</button>
            <button onClick={props.onStartScreen}>Start Screen</button>
        </div>
    )
}

class GameOver extends React.Component {
    
        render() {
            return (
                <End onPlayScreen={this.props.onPlayScreen}
                onScoreBoard = {this.props.onScoreBoard}
                onStartScreen = {this.props.onStartScreen} />
            );
        }
    }

export default GameOver;