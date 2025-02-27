import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        showCart: false,
        cartItems: [],
    },
    reducers: {
        changeShowCartStatus: (state) => {
            state.showCart = !state.showCart;
        },
        addToCart: (state, action) => {
            const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                state.cartItems[existingItemIndex] = {
                    ...state.cartItems[existingItemIndex],
                    quantity: state.cartItems[existingItemIndex].quantity + 1
                };
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            const existingItemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
                if (state.cartItems[existingItemIndex].quantity > 1) {
                    state.cartItems[existingItemIndex] = {
                        ...state.cartItems[existingItemIndex],
                        quantity: state.cartItems[existingItemIndex].quantity - 1
                    };
                } else {
                    state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
                }
            }
        }
    }
});
export  const {changeShowCartStatus,addToCart,removeFromCart}=cartSlice.actions;
export default cartSlice.reducer;