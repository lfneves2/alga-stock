export interface Product {
    _id: string
    name: string
    price: number
    stock: number
    createdAt?: string
    updatedAt?: string
}

const Products: Product[] = [
    {
        _id: '1',
        name:'cookie',
        price: 2.25,
        stock: 720
    },
    {
        _id: '2',
        name:'Milk 1L',
        price: 1.25,
        stock: 120
    },
    {
        _id: '3',
        name:'Detergent',
        price: 1.00,
        stock: 320
    },
    {
        _id: '4',
        name:'Water',
        price: 0.50,
        stock: 70
    },
    {
        _id: '5',
        name:'Candy',
        price: 0.05,
        stock: 150
    }
]

export default Products;