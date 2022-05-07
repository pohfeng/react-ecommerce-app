import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    SET_ITEMS(state, aciton) {
      state.items = aciton.payload;
    },
  },
});

export const shopActions = shopSlice.actions;

export default shopSlice.reducer;
