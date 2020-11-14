import { Action, Thunk } from "..";
import { ProductCreator } from "../../components/Products/ProductForm"
import { getAllProducts, updateSingleProduct } from "../../services/Products.service"
import { Product } from "../../shared/Table/Table.mockdata";

export const updateProducts = (newProduc: Product): Thunk => async (dispatch) => {
    await updateSingleProduct(newProduc);
    dispatch(getAllProducts);
}

export const getProducts = (): Thunk<Product[]> => async (dispatch)=> {
    const products = await getAllProducts();
    dispatch({
        type: 'FETCH_PRODUCTS',
        payload: products
    })
}

export const insertNewProduct = (payload: ProductCreator): Action<ProductCreator> => {
    return {
        type: 'INSERT_NEW_PRODUCT',
        payload
    }
}