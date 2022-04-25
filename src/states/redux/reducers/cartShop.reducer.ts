/**
 * `Common Reducer`.
 * @return {object} Reducer.
 */

import { createSlice } from '@reduxjs/toolkit'
import { Product } from '@/models/';

type Action = {
    type?: string;
    payload: Partial<Product>;
};

const initialState = [];

export const cartShopSlice = createSlice({
    name: 'cartShop',
    initialState,
    reducers: {
        addItemToCart: (state: any, { payload }: Action) => ([...state, payload]),
        removeItemFromCart: (state: any, { payload }: Action) => state.filter((x: Product) => x !== payload.id),
        resetCart: () => initialState,
    },
})

export const { addItemToCart, removeItemFromCart, resetCart } = cartShopSlice.actions

export default cartShopSlice.reducer