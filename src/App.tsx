import React from 'react';
import './App.css';
import Spline from './lib'

function App() {
  return (
    <div className="App">
        <Spline
          url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
          hideLogo={true}
        />
    </div>
  );
}

export default App;
