import React, { useState } from 'react';

import Header from '../Header';

import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Table/Table';
import Products, { Product } from '../../shared/Table/Table.mockdata';

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

  const handlerProductUpdate = (newProduct: Product) => {
    console.log(products.map(product => 'Id product '+product.id + '+ id newProduct '+ newProduct.id))
    setProducts(products.map(product => 
      product.id === newProduct.id ? newProduct : product
    ))
  }

  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <Container >
        <Table 
          headers={headers}
          data={products}
        />

        <ProductForm 
          form={products[0]}
          onSubmit={handlerProductSubmit}
          onUpdate={handlerProductUpdate}
          />

      </Container>
    </div>
  );
}

export default App;
