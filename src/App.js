// Dependencies
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

// CSS
import './CSS/App.css';

// Components
import StartPage from './components/StartPage';
import PlayScreen from './components/PlayScreen';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/PlayScreen" element={<PlayScreen />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
