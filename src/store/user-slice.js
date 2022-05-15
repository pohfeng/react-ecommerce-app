const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  addressList: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SET_ADDRESS_LIST(state, action) {
      state.addressList = action.payload;
    },
    ADD_ADDRESS(state, action) {
      state.addressList.push(action.payload);
    },
    REMOVE_ADDRESS(state, action) {
      state.addressList = state.addressList.filter((address) => {
        return address.id !== action.payload.id;
      });
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
