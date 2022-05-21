import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allItems: [],
  filteredItems: [],
  items: [],
  itemDetails: {},
  relatedProducts: [],
  filters: {
    name: '',
    priceRange: [0, 9000],
    categories: {
      Mac: false,
      iPad: false,
      iPhone: false,
      Watch: false,
      Accessories: false,
    },
    brands: {
      Apple: false,
      Beats: false,
    },
  },
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    SET_ITEMS(state, action) {
      state.items = action.payload;
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
    SET_FILTER(state, action) {
      const { type, params } = action.payload;
      const { field, value } = params;

      if (type === 'name' || type === 'priceRange') {
        state.filters[field] = params.value;
      } else if (type === 'categories' || type === 'brands') {
        state.filters[type][field] = value;
      }
    },
    RESET_FILTER(state) {
      state.filters = { ...initialState.filters };
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
    FILTER_ITEMS(state) {
      const { name, priceRange, categories, brands } = state.filters;
      let filteredItems = state.allItems.map((a) => {
        return { ...a };
      });
      if (name || name === '') {
        filteredItems = filteredItems.filter((item) => {
          const regex = new RegExp(name, 'i');
          return item.name.match(regex);
        });
      }
      if (priceRange) {
        filteredItems = filteredItems.filter((item) => {
          return item.price > priceRange[0] && item.price < priceRange[1];
        });
      }
      if (Object.values(categories).includes(true)) {
        const validKeys = Object.keys(categories).reduce((arr, key) => {
          categories[key] === true && arr.push(key);
          return arr;
        }, []);
        filteredItems = filteredItems.filter((item) => {
          return validKeys.includes(item.category);
        });
      }
      if (Object.values(brands).includes(true)) {
        const validKeys = Object.keys(brands).reduce((arr, key) => {
          brands[key] === true && arr.push(key);
          return arr;
        }, []);
        filteredItems = filteredItems.filter((item) => {
          return validKeys.includes(item.brands);
        });
      }

      state.filteredItems = filteredItems;
      state.items = filteredItems.slice(0, 9);

      // state.filteredItems = state.allItems;
    },
  },
});

export const shopActions = shopSlice.actions;

export default shopSlice.reducer;
