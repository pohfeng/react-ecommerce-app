import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  itemDetails: {},
  relatedProducts: [],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    SET_ITEMS(state, action) {
      state.items = action.payload;
    },
    SET_ITEM_DETAILS(state, action) {
      state.itemDetails = action.payload;
    },
    SET_RELATED_PRODUCTS(state, action) {
      state.relatedProducts = action.payload;
    },
  },
});

export const shopActions = shopSlice.actions;

export default shopSlice.reducer;
