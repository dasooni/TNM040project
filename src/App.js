import './CSS/App.css';
import StartPage from './components/StartPage';
import Timebar from './components/Timebar';
import PlayScreen from './components/PlayScreen';

import React from 'react';

//App.js should not be edited!

function App() {
  return (
    <div className="App">
      
    <div> <PlayScreen></PlayScreen></div>
    <div><Timebar/> </div>

    <div>
      <StartPage/>
    </div>

    </div>
  );
}
export default App;
