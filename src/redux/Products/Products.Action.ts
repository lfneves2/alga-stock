import { Thunk } from "..";
import { ProductCreator } from "../../components/Products/ProductForm"
import { 
    getAllProducts, 
    createSingleProduct, 
    updateSingleProduct, 
    deleteSingleProduct 
} from "../../services/Products.service"
import { Product } from "../../shared/Table/Table.mockdata";

export const getProducts = (): Thunk<Product[]> => async (dispatch)=> {
    const products = await getAllProducts();
    dispatch({
        type: 'FETCH_PRODUCTS',
        payload: products
    })
}

export const updateProduct = (newProduc: Product): Thunk => async (dispatch) => {
    await updateSingleProduct(newProduc);
    dispatch(getProducts());
}


export const insertNewProduct = (product: ProductCreator): Thunk => async(dispatch) => {
    await createSingleProduct(product);
    dispatch(getProducts());
}

export const deleteProduct = (productId: string) : Thunk => async(dispatch) => {
    await deleteSingleProduct(productId);
    dispatch(getProducts());
}