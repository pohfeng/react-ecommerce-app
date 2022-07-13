// import {
//   collection,
//   query,
//   getDocs,
//   getDoc,
//   doc,
//   limit,
// } from 'firebase/firestore';

// import { db } from 'firebase.js';

import dummyData from '../dummyData.json';

import { shopActions } from './shop-silce';

export const fetchShopData = () => {
  return async (dispatch) => {
    // db integration part
    // const shopData = [];

    // const q = query(collection(db, 'shop_items'));
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   shopData.push({
    //     id: doc.id,
    //     ...doc.data(),
    //   });
    // });

    const shopData = dummyData;

    await dispatch(shopActions.SET_ALL_ITEMS(shopData));
    await dispatch(shopActions.FILTER_ITEMS({}));
    dispatch(shopActions.SORT_ITEMS({ sortBy: 'name', sortOrder: 'asc' }));
  };
};

export const fetchDataDetails = (id) => {
  return async (dispatch) => {
    // api integration part
    // const docRef = doc(db, 'shop_items', id);
    // const docSnap = await getDoc(docRef);
    // dispatch(shopActions.SET_ITEM_DETAILS({ id, ...docSnap.data() }));

    const details = dummyData.find((data) => data.id === id) || {};
    dispatch(shopActions.SET_ITEM_DETAILS(details));
  };
};

export const fetchRelatedProducts = () => {
  return async (dispatch) => {
    //  api integration part
    // const relatedItemData = [];
    // const q = query(collection(db, 'shop_items'), limit(5));
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //   relatedItemData.push({ id: doc.id, ...doc.data() });
    // });
    // dispatch(shopActions.SET_RELATED_PRODUCTS(relatedItemData));

    const relatedItemData = dummyData.slice(0, 5);
    dispatch(shopActions.SET_RELATED_PRODUCTS(relatedItemData));
  };
};
