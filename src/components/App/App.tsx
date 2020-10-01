import React from 'react';

import Header from '../Header';

import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Table/Table';
import Products from '../../shared/Table/Table.mockdata';

import './App.css';
import ProductForm from '../ProductForm/ProductForm';

const headers: TableHeader[] = [
  {key: 'name', value: 'Product'},
  {key: 'price', value: 'Price', right: true},
  {key: 'stock', value: 'Stock', right: true},
]

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <Container >
        <Table 
          headers={headers}
          data={Products}
        />

        <ProductForm />

      </Container>
    </div>
  );
}

export default App;
