import { ProductCreator } from '../components/ProductForm/ProductForm';
import { Product } from '../shared/Table/Table.mockdata';
import http from '../utils/http';

export const getAllProducts = () => 
    http.get('http://localhost:3024/products')
        .then(res => res.data)

export const createSingleProduct = (product: ProductCreator) =>
    http.post('http://localhost:3024/products', product)

export const updateSingleProduct = ({_id, name, price, stock}: Product) =>
    http.patch(`http://localhost:3024/products/${_id}`, {
        ...(name && {name}),
        ...(price && {price}),
        ...(stock && {stock})
    })

export const deleteProducts = (id: string) => 
    http.delete(`http://localhost:3024/products/${id}`)