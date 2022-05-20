import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allItems: [],
  filteredItems: [],
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
    CHANGE_PAGE(state, action) {
      const { offset } = action.payload;
      state.items = state.filteredItems.slice(offset, offset + 9);
    },
    // manually sort and filter items due to firebase caveats
    SORT_ITEMS(state, action) {
      const { sortBy = '', sortOrder = 'asc' } = action.payload;

      if (sortBy === 'name') {
        state.filteredItems.sort(function (a, b) {
          const nameA = a.name.toUpperCase();
          const nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return sortOrder === 'asc' ? -1 : 1;
          }
          if (nameA > nameB) {
            return sortOrder === 'asc' ? 1 : -1;
          }
          return 0;
        });
      }

      if (sortBy === 'price' || sortBy === 'rating') {
        state.filteredItems.sort(function (a, b) {
          return sortOrder === 'asc'
            ? a[sortBy] - b[sortBy]
            : b[sortBy] - a[sortBy];
        });
      }
      state.items = state.filteredItems.slice(0, 9);
    },
    FILTER_ITEMS(state, action) {
      const { name, priceRange, rating } = action.payload;
      if (name || name === '') {
        state.filteredItems = state.allItems.filter((item) => {
          const regex = new RegExp(name, 'i');
          return item.name.match(regex);
        });
        state.items = state.filteredItems.slice(0, 9);
        return;
      }
      if (priceRange) {
        state.filteredItems = state.allItems.filter((item) => {
          return item.price > priceRange[0] && item.price < priceRange[1];
        });
        state.items = state.filteredItems.slice(0, 9);
        return;
      }
      if (rating) {
        state.filteredItems = state.allItems.filter((item) => {
          return item.price > priceRange[0] && item.price < priceRange[1];
        });
        state.items = state.filteredItems.slice(0, 9);
        return;
      }
      state.filteredItems = state.allItems;
    },
    SET_ALL_ITEMS(state, action) {
      state.allItems = action.payload;
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
