import {
  collection,
  query,
  getDocs,
  getDoc,
  doc,
  limit,
} from 'firebase/firestore';

import { db } from 'firebase.js';

import { shopActions } from './shop-silce';

export const fetchShopData = () => {
  return async (dispatch) => {
    const shopData = [];
    const q = query(collection(db, 'shop_items'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      shopData.push({ id: doc.id, ...doc.data() });
    });
    console.log(shopData);

    await dispatch(shopActions.SET_ALL_ITEMS(shopData));
    await dispatch(shopActions.FILTER_ITEMS({}));
    dispatch(shopActions.SORT_ITEMS({ sortBy: 'name', sortOrder: 'asc' }));
  };
};

export const fetchDataDetails = (id) => {
  return async (dispatch) => {
    const docRef = doc(db, 'shop_items', id);
    const docSnap = await getDoc(docRef);

    // console.log({ id, ...docSnap.data() });
    // const DUMMY_DATA = {
    //   id: 'fd382408-3746-4d17-ac30-73ebea84a4a7',
    //   name: 'Apple iPhone 13 (512GB, Pink)',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //   price: 1.74,
    //   rating: 1,
    //   available_unit: 8,
    //   image_url: '/images/iphone-12-64gb(3399).png',
    // };

    dispatch(shopActions.SET_ITEM_DETAILS({ id, ...docSnap.data() }));
  };
};

export const fetchRelatedProducts = () => {
  return async (dispatch) => {
    const relatedItemData = [];
    const q = query(collection(db, 'shop_items'), limit(5));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      relatedItemData.push({ id: doc.id, ...doc.data() });
    });

    dispatch(shopActions.SET_RELATED_PRODUCTS(relatedItemData));
  };
};
