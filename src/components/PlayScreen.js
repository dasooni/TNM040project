import Grid from 'react-css-grid';
import Timebar from '../components/Timebar';
import React, { useState, useEffect } from 'react';

const getRandomPositon = () => {
    const x = Math.random() * 100 + "%"
    const y = Math.random() * 100 + "%"
    return {left: x, top: y}
}

const generatePositions = () => {
    const positions = []

    //Kolla så objekten inte krockar med varandra


    return [
        getRandomPositon(),
        getRandomPositon(),
        getRandomPositon(),
        getRandomPositon(),
        getRandomPositon(),
        getRandomPositon(),
    ]
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
            
          <div className='game'>
            {shapes.map(position => <div className='square' style={position}></div>)}
            

          </div>
        </div>
    )
}


export default PlayScreen;