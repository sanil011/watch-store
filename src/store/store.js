import { configureStore } from '@reduxjs/toolkit';
import filterSliceReducer from "./filterSlice";
export default configureStore({
    reducer: {
        filter: filterSliceReducer,
    },
});