import '../CSS/index.css';
import info from '../images/info-icon.svg';

function StartPage() {

    return (
        <div>
            <h1>Tap-it</h1>
            <div className = "playButton" style = {{textAlign: 'center' }}> {/*Timer starts when onClick*/}

                Play

            </div>

            <div style = {{height: '10px'}}></div>

            <div className = "scoreboardButton">

                Scoreboard

            </div>

            <div>
            
            <img className='infoButton' src={info} alt="Info" width="50px" height="50px"/>
            


            </div>
        </div>
    );
}

export default StartPage;