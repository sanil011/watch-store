import { createSlice } from '@reduxjs/toolkit'

const initialState = { cartValue: [] }

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        cart: (state, action) => {
            state.cartValue = [...state.cartValue, action.payload]
        }
    }
})
export default cartSlice.reducer
export const cartActions = cartSlice.actions;