import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {showCart : true};

 const cartSlice = createSlice({
    name: 'cart',
    initialState : initialCartState,
    reducers : {
        toggle(state){
            state.showCart = !state.showCart;
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;