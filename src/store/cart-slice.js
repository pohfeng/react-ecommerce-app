const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    SET_ITEMS(state, action) {
      state.items = action.payload;
    },
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
    INCREASE_QTY(state, action) {
      const { id } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      const item = state.items.find((item) => item.id === id);
      const newQty = item.quantity + 1;
      const newAmount = parseFloat((newQty * item.price).toFixed(2));
      state.items[itemIndex].quantity = newQty;
      state.items[itemIndex].total_amount = newAmount;
    },
    DECREASE_QTY(state, action) {
      const { id } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === id);
      const item = state.items.find((item) => item.id === id);
      const newQty = item.quantity - 1;
      const newAmount = parseFloat((newQty * item.price).toFixed(2));
      state.items[itemIndex].quantity = newQty;
      state.items[itemIndex].total_amount = newAmount;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
