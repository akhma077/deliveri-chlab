import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type FilterSticeType = {
    categoryId: number;
};

const initialState: FilterSticeType = {
    categoryId: 0,
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
    },
});

export const selectFilter = (state: RootState) => state.filter;
export const filterActions = filterSlice.actions;
export default filterSlice.reducer;
