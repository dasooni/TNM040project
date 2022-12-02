import backArrow from '../images/back-arrow.svg';
import React from 'react';
import {score} from '../components/PlayScreen';

let name = '';

const dummy = [
    { name: "Johan", score: 1000 }
]

//@returns {string}
function Score ({scores = dummy, appState, GoBackToStart}) {
    return (
        <div>
            <div className='backScoreboard' onClick={GoBackToStart}>
            <img src={backArrow} alt="Back" width="50px" height="50px" />
            </div>
            <h1 className='headerScoreboard'>Poängtavla</h1>
            <div className='scoreboard'>
                <table>
                    <tr>
                        <th>Namn{score}</th>
                        <th>Poäng</th>
                    </tr>

                    {scores.map(currScore => {
                        return (
                            <tr>
                                <td>{currScore.name}</td>
                                <td>{currScore.score}</td>
                            </tr>
                        )
                    })}

                </table>

            </div>

        </div>
    )
}

class Scoreboard extends React.Component {

    render() {
        return (
            <Score appState={this.props.appState}
             GoBackToStart={this.props.GoBackToStart} />
        );
    }
}
export default Scoreboard;