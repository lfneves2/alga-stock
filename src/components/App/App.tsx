import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

import Header from '../Header';

import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Table/Table';
import { Product } from '../../shared/Table/Table.mockdata';

import './App.css';
import ProductForm, { ProductCreator } from '../ProductForm/ProductForm';
import { getAllProducts } from '../../services/Products.service';

const headers: TableHeader[] = [
  {key: 'id', value: '#'},
  {key: 'name', value: 'Product'},
  {key: 'price', value: 'Price', right: true},
  {key: 'stock', value: 'Stock', right: true},
]


function App() {
  
  const [products, setProducts] = useState<Product[]>([]);
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>();
  
  useEffect(()=> {
    async function fetchData() {
      const _products = await getAllProducts();
      setProducts(_products);
    }

    fetchData()
  }, [])

  const handlerProductSubmit = (product: ProductCreator) => {
    console.log(product)
    setProducts([
      ...products,
      {
        id: products.length +1,
        ...product
      }
    ])
  }

  const handlerProductUpdate = (newProduct: Product) => {
    setProducts(products.map(product => 
      product.id === newProduct.id ? newProduct : product
    ))

    setUpdatingProduct(undefined)
  }

  const handlerProductEdit = (product: Product) => {
    console.log(product)
    setUpdatingProduct(product);
  }

  const handlerProductDetail = (product: Product) => {
    Swal.fire(
      'Product Detail',
      `${product.name} costs $${product.price} we have avaible ${product.stock} in stock`,
      'info'
    )
  }

  const deleteProduct = (id: number) => {
    setProducts(products.filter(product => 
      product.id !== id
    ))
  }

  const handlerProductDelete =  (product: Product) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#09f',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes, delete ${product.name}!`
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(product.id);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <Container >
        <Table 
          headers={headers}
          data={products}
          enabledAction
          onDelete={handlerProductDelete}
          onDetails={handlerProductDetail}
          onEdit={handlerProductEdit}
        />

        <ProductForm 
          form={updatingProduct}
          onSubmit={handlerProductSubmit}
          onUpdate={handlerProductUpdate}
          />

      </Container>
    </div>
  );
}

export default App;
