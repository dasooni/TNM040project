import '../CSS/index.css'
import { useEffect } from 'react'


function Timebar({ timeLeft, setTimeLeft, restartBar, onGameOver }) {
        useEffect(() => {
                if (!timeLeft) {
                        console.log("timeLeft is 0");
                        onGameOver();
                        return;
                }
                const time = setTimeout(() => {
                        setTimeLeft(timeLeft - 1);

                }, 1000);

                return () => {
                        clearTimeout(time);
                        console.log("Time:", time);
                        console.log("TimeLeft:", timeLeft);

                }
        }
                ,[onGameOver, setTimeLeft, timeLeft]);


        return (
                <div className="barWrapper">
                        { restartBar && <div className="bar"> </div>}
                </div>
                )

}
export default Timebar;