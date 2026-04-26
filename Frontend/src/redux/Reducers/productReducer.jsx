import { createSlice } from "@reduxjs/toolkit";

 const productSlice = createSlice({
    name:"product",
    initialState:{
        products:[]
    },
    reducers:{
        laodproducts:(state,action)=>{
            state.products = action.payload
        }
    }
})


export const {laodproducts} = productSlice.actions
export default productSlice.reducer