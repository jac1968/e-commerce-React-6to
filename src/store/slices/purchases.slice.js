import { createSlice } from "@reduxjs/toolkit";

const purchases = createSlice({
    name: 'purchases',
    initialState: [],
    reducers: {
        setPurchases: (_value, action) => action.payload,
    }
})

export const { setPurchases } = purchases.actions

export default purchases.reducer
