import { createSlice } from '@reduxjs/toolkit'
import { Watches } from "./watches";
const initialState = { watches: Object.keys(Watches), Brands: [], Colors: [], Prices: [], Straps: [], Detail: "" };

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        brand: (state, action) => {
            state.Brands = action.payload
        },
        color: (state, action) => {
            state.Colors = action.payload
        },
        price: (state, action) => {
            state.Prices = action.payload
            console.log(state.Prices, action.payload)
        },
        strap: (state, action) => {
            state.Straps = action.payload
        },
        detail: (state, action) => {
            state.Detail = action.payload
        },
        filter(state, action) {
            let filteredItems = [...initialState.watches];
            state.Brands.length &&
                (filteredItems = filteredItems.filter(
                    (item) =>
                        state.Brands.indexOf(Watches[item]["brand"].toUpperCase()) !== -1
                ));

            state.Prices.length &&
                (filteredItems = filteredItems.filter(
                    (item) =>
                        +Watches[item]["price"] >= +state.Prices[0] &&
                        +Watches[item]["price"] <= +state.Prices[1]
                ));

            const colorsFilterHelper = (item) => {
                let matches = false;
                Watches[item]["color"].forEach((dt) => {
                    if (state.Colors.indexOf(dt.toUpperCase()) !== -1) { matches = true; }
                })
                return matches
            }

            state.Colors.length &&
                (filteredItems = filteredItems.filter(
                    (item) => colorsFilterHelper(item) !== false
                ));

            state.Straps.length &&
                (filteredItems = filteredItems.filter((item) => state.Straps.indexOf(Watches[item]["Strap Material"].toUpperCase()) !== -1
                ));
            state.watches = filteredItems;
        },
    }
})

export default filterSlice.reducer

export const filterActions = filterSlice.actions;