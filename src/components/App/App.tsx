import React, { useState } from 'react';

import Header from '../Header';

import Container from '../../shared/Container';

import './App.css';
import Table from '../../shared/Table/Table';

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <Container >
        <Table />

      </Container>
    </div>
  );
}

export default App;
