import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import Header from '../Header';

import Container from '../../shared/Container';
import './App.css';
import ProductsCRUD from '../Products/ProductsCRUD';

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <Container >
        <ProductsCRUD />
      </Container>
    </div>
  );
}

export default App;
