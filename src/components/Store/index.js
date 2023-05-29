import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './ToggleCart';
import itemSlice from './addToCart';

 const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        item: itemSlice.reducer
      }
});

export default store;