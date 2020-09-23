import React from 'react';

import Header from '../Header';

import Button from '../../shared/Button';
import Container from '../../shared/Container';

import './App.css';

function TestComponent() {
  return <img width="12" src="https://img2.gratispng.com/20181203/otz/kisspng-magnifying-glass-computer-icons-zoom-lens-scalable-search-shop-svg-png-icon-free-download-33415-5c05ad5bce5493.9552953015438759318451.jpg" alt="Search icon"/>
}

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock"/>

        <Container >
          <Button
            appendIcon={<TestComponent />}
            onClick={() => window.alert('teste')}
          >
            Alert
          </Button>
        </Container>
    </div>
  );
}

export default App;
