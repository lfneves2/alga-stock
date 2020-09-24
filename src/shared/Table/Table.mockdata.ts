export interface Product {
    id: number
    name: string
    price: number
    stock: number
}

const Products: Product[] = [
    {
        id: 1,
        name:'cookie',
        price: 2.25,
        stock: 720
    },
    {
        id: 2,
        name:'Milk 1L',
        price: 1.25,
        stock: 120
    },
    {
        id: 3,
        name:'Detergent',
        price: 1.00,
        stock: 320
    },
    {
        id: 4,
        name:'Water',
        price: 0.50,
        stock: 70
    },
    {
        id: 5,
        name:'Candy',
        price: 0.05,
        stock: 150
    }
]

export default Products;