import React, { useState } from 'react';

import Header from '../Header';

import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Table/Table';
import Products from '../../shared/Table/Table.mockdata';

import './App.css';
import ProductForm, { ProductCreator } from '../ProductForm/ProductForm';

const headers: TableHeader[] = [
  {key: 'name', value: 'Product'},
  {key: 'price', value: 'Price', right: true},
  {key: 'stock', value: 'Stock', right: true},
]


function App() {
  const [products, setProducts] = useState(Products);
  
  const handlerProductSubmit = (product: ProductCreator) => {
    console .log(product)
    setProducts([
      ...products,
      {
        id: products.length +1,
        ...product
      }
    ])
  }
  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <Container >
        <Table 
          headers={headers}
          data={products}
        />

        <ProductForm onSubmit={handlerProductSubmit}/>

      </Container>
    </div>
  );
}

export default App;
