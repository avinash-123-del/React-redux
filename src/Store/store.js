//this file is for storing all reducers

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import productReducer from './productSlice'
 
const store = configureStore({
    reducer: {
        cart: cartReducer,        //name of the reducer here we can add multiple reducers
        product : productReducer,
    }
});

export default store