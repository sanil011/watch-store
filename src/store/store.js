import { configureStore } from '@reduxjs/toolkit';
import filterSliceReducer from "./filterSlice";
import cartSliceReducer from './cartSlice';
import favoriteSlice from './favoriteSlice';
export default configureStore({
    reducer: {
        filter: filterSliceReducer,
        cart: cartSliceReducer,
        favorite: favoriteSlice
    },
});