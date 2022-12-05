
import {useEffect} from "react";

const Timer = ({timeLeft, setTimeLeft}) => {

    useEffect(() => {
        if(!timeLeft) {
          //setTimeLeft(5);
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

    // useEffect(() => {
    //   if(!timeLeft) {
    //     setTimeLeft(5);
    //     return;
    //   }

    //   const time = setTimeout(() => {
    //     setTimeLeft(timeLeft - 1);
    //   }, 1000);

    //   return () => clearTimeout(time);
     
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

// useEffect(() => {
//     if(!timeLeft) {
//       //setTimeLeft(5);
//       return;
//     }
//     const time = setTimeout(() => {
//         console.log("Timer()", timeLeft);
//         setTimeLeft(timeLeft - 1);
      
//     }, 5000);

//     return () => clearTimeout(time);
    
//   }, [setTimeLeft, timeLeft]);