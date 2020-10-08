import { ProductCreator } from '../components/Products/ProductForm';
import { Product } from '../shared/Table/Table.mockdata';
import http from '../utils/http';

export const getAllProducts = () => 
    http.get('/products')
        .then(res => res.data)

export const createSingleProduct = (product: ProductCreator) =>
    http.post('/products', product)

export const updateSingleProduct = ({_id, name, price, stock}: Product) =>
    http.patch(`/products/${_id}`, {
        ...(name && {name}),
        ...(price && {price}),
        ...(stock && {stock})
    })

export const deleteProducts = (id: string) => 
    http.delete(`http://localhost:3024/products/${id}`)