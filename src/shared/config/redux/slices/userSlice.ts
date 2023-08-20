import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
type userSticeType = {
    user: any;
};

const initialState: userSticeType = {
    user: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<number>) {
            state.user = action.payload;
        },
    },
});

export const selectUser = (state: RootState) => state.user;
export const userActions = userSlice.actions;
export default userSlice.reducer;
