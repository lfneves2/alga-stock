import http from '../utils/http';

export const getAllProducts = () => 
    http.get('http://localhost:3024/products')
        .then(res => res.data)

