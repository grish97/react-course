import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducers } from './slice/productSlice';

export const store = configureStore({
    reducer: combineReducers({
        products: productsReducers
    })
});