import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { createSingleProduct, deleteProducts, getAllProducts, updateSingleProduct } from '../../services/Products.service';
import Table, { TableHeader } from '../../shared/Table/Table';
import { Product } from '../../shared/Table/Table.mockdata';
import ProductForm, { ProductCreator } from './ProductForm';

const headers: TableHeader[] = [
    {key: 'id', value: '#'},
    {key: 'name', value: 'Product'},
    {key: 'price', value: 'Price', right: true},
    {key: 'stock', value: 'Stock', right: true},
  ]

const ProductsCRUD = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>();
    
    async function fetchData() {
      const _products = await getAllProducts();
      setProducts(_products);
    }
  
    useEffect(()=> {
      fetchData();
    }, [])

    const handlerProductSubmit = async (product: ProductCreator) => {
        try {
          await createSingleProduct(product);
          fetchData();
        }catch (err) {
          Swal.fire('Oops!', err.message, 'error');
        }
      }
    
      const handlerProductUpdate = async (newProduct: Product) => {
        try{
          await updateSingleProduct(newProduct);
          fetchData();
        } catch (err) {
          Swal.fire('Oops!', err.message, 'error');
        }
    
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
    
      const deleteProduct = async(id: string) => {
        try {
          await deleteProducts(id);
          fetchData();
          Swal.fire('Uhul!', 'Product successfully deleted', 'success');
        } catch (err) {
          Swal.fire('Oops!', err.message, 'error');
        }
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
            deleteProduct(product._id);
          }
        })
      }
    
    return <>
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
    </>
}

export default ProductsCRUD;