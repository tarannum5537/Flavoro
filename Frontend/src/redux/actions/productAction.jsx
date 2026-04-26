import axios from "../../api/axiosConfigure";
import { laodproducts } from "../Reducers/productReducer";




export const createProduct = (product) => async (dispatch,state) => {
    axios.post("/products",product)
    dispatch(loadProduct())
}
export const loadProduct = (product) => async (dispatch,state) => {
   const {data} = await axios.get("/products")
   dispatch(laodproducts(data))
}