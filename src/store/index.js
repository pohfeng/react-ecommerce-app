import { configureStore } from '@reduxjs/toolkit';

import shopReducer from './shop-silce';
import cartReducer from './cart-slice';

const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
  },
});

export default store;
