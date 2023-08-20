import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { filterActions } from "../slices/filterSlice";
import { basketActions } from "../slices/basketSlice";
import { userActions } from "../slices/userSlice";

const actions = {
    ...filterActions,
    ...basketActions,
    ...userActions,
};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};
