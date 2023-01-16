import React from 'react';
import './App.css';
import { Desktop, Mobile } from 'components/Responsive';

function App() {
  return (
    <div className="App">
      <Mobile>only appears on mobile</Mobile>
      <Desktop>only appears on desktop</Desktop>
    </div>
  );
}

export default App;
