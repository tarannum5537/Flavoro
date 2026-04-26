import { createSlice } from "@reduxjs/toolkit";

 const userSlice = createSlice({
    name:"user",
    initialState:{
        users:null
    },
    reducers:{
        laodusers:(state,action)=>{
            state.users = action.payload
        },

        removeuser:(state,action)=>{
            state.users =null
        }
    }
})


export const {laodusers,removeuser} = userSlice.actions
export default userSlice.reducer