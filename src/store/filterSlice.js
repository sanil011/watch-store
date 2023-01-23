import { createSlice } from '@reduxjs/toolkit'
import { Watches } from "./Watches";
const initialState = { watches: Object.keys(Watches), Brand: [], Color: [], Price: [], Strap: [] };



export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        brand: (state, action) => {
            state.Brand = action.payload
        },
        color: (state, action) => {
            state.Color = action.payload
            console.log(state.Brand, "color")
        },
        price: (state, action) => {
            state.Price = action.payload
            console.log(state.Price, action.payload)
        },
        strap: (state, action) => {
            state.Strap = action.payload
        },
        filter(state, action) {
            let filteredItems = [...initialState.watches];
            state.Brand.length &&
                (filteredItems = filteredItems.filter(
                    (item) =>
                        state.Brand.indexOf(Watches[item]["brand"].toUpperCase()) !== -1
                ));

            state.Price.length &&
                (filteredItems = filteredItems.filter(
                    (item) =>
                        +Watches[item]["price"] >= +state.Price[0] &&
                        +Watches[item]["price"] <= +state.Price[1]
                ));

            const colorsFilterHelper = (item) => {
                let matches = false;
                Watches[item]["color"].forEach((dt) => {
                    if (state.Color.indexOf(dt.toUpperCase()) !== -1) { matches = true; }
                })
                return matches
            }

            state.Color.length &&
                (filteredItems = filteredItems.filter(
                    (item) => colorsFilterHelper(item) !== false
                ));

            state.Strap.length &&
                (filteredItems = filteredItems.filter((item) => state.Strap.indexOf(Watches[item]["Strap Material"].toUpperCase()) !== -1
                ));
            state.watches = filteredItems;
        },
    }
})

export default filterSlice.reducer

export const filterActions = filterSlice.actions;