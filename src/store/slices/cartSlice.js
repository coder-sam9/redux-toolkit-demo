import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        showCart:false
    },
    reducers:{
        changeShowCartStatus:(state)=>{
            state.showCart=!state.showCart;
        }
    }
});
export  const {changeShowCartStatus}=cartSlice.actions;
export default cartSlice.reducer;