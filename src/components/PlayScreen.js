import Grid from 'react-css-grid';
import Timebar from '../components/Timebar';
import React, { useState, useEffect } from 'react';
import strawberry from '../images/strawberry.svg';


const getRandomPosition = () => {
    const x = Math.random() * 100
    const y = Math.random() * 100
    return {
        x: x,
        y: y,
        left: x + "%",
        top: y + "%",
    }
}

const generatePositions = () => {
    const positions = [];
    let newPos;

    let limit = 1000;
     while (positions.length<6 && limit-- > 0) {
        
         if (positions.length==0) {
            newPos = getRandomPosition();
            positions.push(newPos);
         }
         else {
            newPos = getRandomPosition();
            let collision = false;
             for(let i = 0; i<positions.length; i++) {                
                 if(Math.abs(positions[i].x - newPos.x) < 25 && Math.abs(positions[i].y - newPos.y) < 25) {
                     collision = true;
                    }
             }
             if (!collision) {
                positions.push(newPos);
             }
         }
        }
    
    if (limit <= 0) {console.warn("ENDLESS LOOP");}   

    return positions;
}


function PlayScreen() {
    const [showBar, setShowBar] = useState(true)
    const [shapes, setShapes] = useState(generatePositions())

    useEffect(() => {
        if (!showBar) {
            setShowBar(true)
        }
    }, [showBar])

    const reset = () => {
        setShowBar(false)
    }
    return (
        <div>
         
        <button onClick={reset}>reset bar</button>
        <div><Timebar visible={showBar} onTimer={console.log} /></div>
        <h1> Tap </h1>
          <div className='game'>
            {    
            
            shapes.map(position =>        
            <div style={position} className="strawberry">
                <img src={strawberry} alt="strawberry" height="80px"/>
            </div>)}
          </div>
        </div>
    )
}
export default PlayScreen;