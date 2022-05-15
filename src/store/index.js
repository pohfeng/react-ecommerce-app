import { configureStore } from '@reduxjs/toolkit';

import shopReducer from './shop-silce';
import cartReducer from './cart-slice';
import userReducer from './user-slice';

const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
