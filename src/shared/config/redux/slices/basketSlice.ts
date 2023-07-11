import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Product } from "../../../../entities";
import testImage from "../../../../shared/assets/img/b524370421f7498ff97f82f4fe3922ac.jpeg";
import { act } from "react-dom/test-utils";

const initialState: { basket: any } = {
    basket: [],
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        // Добавление одного продукта в basket - массив
        addFirstProductToBasket(state, action: PayloadAction<Product>) {
            state.basket = [...state.basket, [action.payload]];
        },
        // Добавление продукта в basket - массив
        addProductToBasket(state, action: PayloadAction<any>) {
            state.basket.map((ars: Product[], index: number) => {
                if (ars[0].id === action.payload.id) {
                    state.basket[index] = [
                        ...state.basket[index],
                        action.payload,
                    ];
                }
            });
            state.basket = [...state.basket];
        },
        // Удаление одного продукта в basket - массив
        deleteFirstProductToBasket(state, action: PayloadAction<Product>) {
            state.basket.map((ars: Product[], index: number) => {
                if (ars[0].id === action.payload.id) {
                    state.basket = [...state.basket].filter(
                        (item: Product, indexTwo: number) => index !== indexTwo
                    );
                }
            });
        },
        // Удаление продукта в basket - массив
        deleteProductToBasket(state, action: PayloadAction<Product>) {
            state.basket.map((ars: Product[], index: number) => {
                if (ars[0].id === action.payload.id) {
                    state.basket[index].pop();
                }
            });
            state.basket = [...state.basket];
        },
    },
});

export const selectBasket = (state: RootState) => state.basket;
export const basketActions = basketSlice.actions;
export default basketSlice.reducer;
