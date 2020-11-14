import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import Table, { TableHeader } from '../../shared/Table/Table';
import { Product } from '../../shared/Table/Table.mockdata';
import ProductForm, { ProductCreator } from './ProductForm';
import { connect, useDispatch } from 'react-redux';
import * as ProductActions from '../../redux/Products/Products.Action';
import { RootState, ThunkDispatch } from '../../redux';

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
    const dispatch: ThunkDispatch = useDispatch();

    const showErrorAlert = (err: Error) => Swal.fire('Oops!', err.message, 'error');

    const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>();
    
    useEffect(()=> {
      fetchData();
    }, [])

    async function fetchData() {
      dispatch(ProductActions.getProducts())
        .catch(showErrorAlert);
    }  

    const handlerProductSubmit = async (product: ProductCreator) => {
      dispatch(ProductActions.insertNewProduct(product))
        .catch(showErrorAlert);

    }
  
    const handlerProductUpdate = async (newProduct: Product) => {
      dispatch(ProductActions.updateProduct(newProduct))
        .then(()=>setUpdatingProduct(undefined))
        .catch(showErrorAlert);

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
      }).then((value) => value && deleteProduct(product._id))
    }

    const deleteProduct = async(id: string) => {
      dispatch(ProductActions.deleteProduct(id))
       .then(() => {
         Swal.fire('Uhul!', 'Product successfully deleted', 'success')
       })
       .catch(showErrorAlert);       
    }
  
    const handlerProductDetail = (product: Product) => {
      Swal.fire(
        'Product Detail',
        `${product.name} costs $${product.price} we have avaible ${product.stock} in stock`,
        'info'
      )
    }
    
    return <>
        <Table 
          headers={headers}
          data={props.products}
          enabledAction
          onDelete={handlerProductDelete}
          onDetails={handlerProductDetail}
          onEdit={setUpdatingProduct}
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