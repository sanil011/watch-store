import { createSlice } from '@reduxjs/toolkit'

const initialState = { favoriteValue: [] }

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        favorite: (state, action) => {
            state.favoriteValue = [...state.favoriteValue, action.payload.name]
            console.log(state.favoriteValue)
        },
        removeItem: (state, action) => {
            const value = state.favoriteValue;
            const data = value.filter((dt) => dt != action.payload)
            state.favoriteValue = data;
        }
    }
})
export default favoriteSlice.reducer
export const favoriteActions = favoriteSlice.actions;