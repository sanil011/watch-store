import { createSlice } from '@reduxjs/toolkit'

const initialState = { cartValue: [], totalPrice: 0 }

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        cart: (state, action) => {
            state.totalPrice = state.totalPrice + action.payload.price
            if (state.cartValue.indexOf(action.payload.name) === -1) {
                state.cartValue.push(action.payload.name);
            }
            console.log(state.cartValue)
        },
        removeItem: (state, action) => {
            const value = state.cartValue;
            const data = value.filter((dt) => dt != action.payload.name)
            state.cartValue = data;
            state.totalPrice = state.totalPrice - action.payload.price
        }
    }
})
export default cartSlice.reducer
export const cartActions = cartSlice.actions;