import { cartActions } from './cart-slice';

export const fetchCartItems = () => {
  return (dispatch) => {
    const DUMMY_DATA = [
      {
        id: 'aaae189f-7935-434f-9a47-1d4b41025902',
        name: 'Apple iPhone 13 (512GB, Pink)',
        price: 1.12,
        rating: 2,
        available_unit: 17,
        image_name: 'iphone-13-pink',
        quantity: 1,
        total_amount: 1.12,
        shipping_fee: 0,
      },
      {
        id: 'ad498c63-55df-49b3-ad98-7ee0644e2e26',
        name: 'Apple iPhone 13 (512GB, Pink)',
        price: 1.92,
        rating: 2,
        available_unit: 38,
        image_name: 'iphone-13-pink',
        quantity: 2,
        total_amount: 3.84,
        shipping_fee: 0,
      },
      {
        id: '2e8c84d4-f0e4-4ec5-973c-053223fd63a3',
        name: 'Apple iPhone 13 (512GB, Pink)',
        price: 1.43,
        rating: 1,
        available_unit: 59,
        image_name: 'iphone-13-pink',
        quantity: 1,
        total_amount: 1.43,
        shipping_fee: 0,
      },
      {
        id: '7c61faeb-547a-4c0d-a7f5-202f84d8c60f',
        name: 'Apple iPhone 13 (512GB, Pink)',
        price: 1.11,
        rating: 4,
        available_unit: 42,
        image_name: 'iphone-13-pink',
        quantity: 1,
        total_amount: 1.11,
        shipping_fee: 0,
      },
      {
        id: '15515157-99b5-4a72-90cb-20348a5548e1',
        name: 'Apple iPhone 13 (512GB, Pink)',
        price: 1.1,
        rating: 3,
        available_unit: 71,
        image_name: 'iphone-13-pink',
        quantity: 1,
        total_amount: 1.1,
        shipping_fee: 0,
      },
    ];

    dispatch(cartActions.SET_ITEMS(DUMMY_DATA));
  };
};
