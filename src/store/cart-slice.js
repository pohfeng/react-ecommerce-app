const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADD_ITEM(state, action) {
      const { itemInfo } = action.payload;
      const itemIndex = state.items.findIndex(
        (item) => item.id === itemInfo.id
      );
      if (itemIndex > -1) {
        state.items[itemIndex].quantity += 1;
        return;
      }
      state.items.push(itemInfo);
    },
    REMOVE_ITEM(state, action) {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
