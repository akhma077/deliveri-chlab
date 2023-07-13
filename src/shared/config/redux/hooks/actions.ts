import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { filterActions } from "../slices/filterSlice";
import { basketActions } from "../slices/basketSlice";

const actions = {
    ...filterActions,
    ...basketActions,
};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};
