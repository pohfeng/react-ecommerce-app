const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  addressList: [],
  showSignInForm: false,
  showSignUpForm: false,
  signedIn: false,
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
    SET_SHOW_SIGN_IN(state, action) {
      state.showSignInForm = action.payload;
    },
    SET_SHOW_SIGN_UP(state, action) {
      state.showSignUpForm = action.payload;
    },
    SET_SIGNED_IN(state, action) {
      state.signedIn = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
