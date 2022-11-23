import '../CSS/index.css';
import '../CSS/App.css';
import info from '../images/info-icon.svg';
import Particles from 'react-particles';
import PlayScreen from './PlayScreen';
import { loadFull } from "tsparticles";
import { useCallback } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
    Link,
} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function StartPage() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container) => {
    }, []);

    return (
        <div className="App">
            <h1>Tap-it</h1>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                className="Particles"
                options={{
                    background: {
                        color: "#181A18",
                    },
                    fpsLimit: 60,
                    interactivity: {
                        detectsOn: "canvas",
                        events: {
                            resize: true
                        }
                    },
                    particles: {
                        color: {
                            value: "#ffffff"
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800
                            },
                            limit: 0,
                            value: 300
                        },
                        opacity: {
                            animation: {
                                enable: true,
                                minimumValue: 0.05,
                                speed: 1,
                                sync: false
                            },
                            random: {
                                enable: true,
                                minimumValue: 0.05
                            },
                            value: 1
                        },
                        shape: {
                            type: "star"
                        },
                        size: {
                            randmon: {
                                enable: true,
                                minimumValue: 0.5,
                                value: 1
                            }
                        }
                    }

                }}
            />
            <NavLink className="nav-link" to="/PlayScreen">
                <div className="playButton" style={{ textAlign: 'center' }} > {/*Timer starts when onClick*/}

                    <div style={{ textDecoration: 'none' }} className='text'>Play</div>

                </div>
            </NavLink>

            <div style={{ height: '10px' }}></div>

            <NavLink style={{ textDecoration: 'none' }} className="nav-link" to="/Scoreboard">
                <div className="scoreboardButton">

                    <div className='text'>Scoreboard</div>

                </div></NavLink>


            <div>

                <img className='infoButton' src={info} alt="Info" width="50px" height="50px" />
            </div>

        </div>
    );
}

export default StartPage;