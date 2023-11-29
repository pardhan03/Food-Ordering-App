import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cartslice';

const AppStore=configureStore({
    reducer:{
        cart:cartReducer,
    },
});

export default AppStore;