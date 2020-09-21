import React from 'react';
import Button from '../Button';
import Header from '../Header';
import './App.css';

function TestComponent() {
  return <img width="12" src="https://lh3.googleusercontent.com/proxy/yoXYCNI8vo98JkuCouINhENdV5atQQYY_N3Km3A6_ps0qclbBW7XNSJYoBkWqtXvHkTMS5K8gLRLZnpkvt34T_9XXMPuHdaE1Thu5x8S30rODUcEAU65JyGxkV_ywCzmbt16_Trckh3TYCAQaOyZ8-rROTBFlxe88U1BQjPb2DQOqF_4Qh35DZ30yFsaTI-8ArbaMW2LioTwXK_9slTbvEzd8MR81w" alt="Search icon"/>
}

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock"/>

      <div className="Container">
        <Button
          appendIcon={<TestComponent />}
          onClick={() => window.alert('teste')}
        >
          Potata
        </Button>
      </div>
    </div>
  );
}

export default App;
