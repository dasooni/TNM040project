
import {useEffect} from "react";

const Timer = ({timeLeft, setTimeLeft}) => {

    useEffect(() => {
        if(!timeLeft) {
          return;
        }
        const time = setTimeout(() => {
            console.log("Timer()", timeLeft);
            setTimeLeft(timeLeft - 1);
          
        }, 5000);
  
        return () => clearTimeout(time);
        
      }, [setTimeLeft, timeLeft]);

    }

export default Timer;
