import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Table, { TableHeader } from '../../shared/Table/Table';
import { Product } from '../../shared/Table/Table.mockdata';
import ProductForm, { ProductCreator } from './ProductForm';
import { connect, useDispatch } from 'react-redux';
import * as ProductActions from '../../redux/Products/Products.Action';
import { RootState } from '../../redux';

const headers: TableHeader[] = [
    {key: 'id', value: '#'},
    {key: 'name', value: 'Product'},
    {key: 'price', value: 'Price', right: true},
    {key: 'stock', value: 'Stock', right: true},
  ]

declare interface ProductsCRUDProps {
    products: Product[]
}

const ProductsCRUD: React.FC<ProductsCRUDProps> = (props) => {
    const dispatch = useDispatch();

    //const [products, setProducts] = useState<Product[]>([]);
    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>();
    
    async function fetchData() {
      try {
        await dispatch(ProductActions.getProducts());
      } catch (err){
        Swal.fire('Oops!', err.message, 'error');
      }
    }
  
    useEffect(()=> {
      fetchData();
    }, [])

    const handlerProductSubmit = async (product: ProductCreator) => {
      try {
        dispatch(ProductActions.insertNewProduct(product))
      }catch (err) {
        Swal.fire('Oops!', err.message, 'error');
      }
    }
  
    const handlerProductUpdate = async (newProduct: Product) => {
      try{
        await dispatch(ProductActions.updateProduct(newProduct));
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
        await dispatch(ProductActions.deleteProduct(id));
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
          data={props.products}
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

const mapStateToProps = (state: RootState) => ({
    products: state.products

})

export default connect(mapStateToProps)(ProductsCRUD);