import { cartActions } from './cart-slice';

export const fetchCartItems = () => {
  return (dispatch) => {
    const DUMMY_DATA = [
      {
        available_unit: 77,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        id: '6Kj7475OLMDGkx0sJawC',
        image_url: '/images/magic-touchpad.png',
        name: 'Magic Touchpad',
        price: 489,
        rating: 4,
        quantity: 1,
        total_amount: 489,
        shipping_fee: 0,
      },
      {
        available_unit: 95,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        id: 'HQjO7E19TxkXFyrY7e0G',
        image_url: '/images/apple-watch-se.png',
        name: 'Apple Watch SE',
        price: 1199,
        rating: 3,
        quantity: 1,
        total_amount: 1199,
        shipping_fee: 0,
      },
      {
        available_unit: 71,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        id: 'QFYBGD2keFz4twcewENM',
        image_url: '/images/beats-studio-buds.png',
        name: 'Beats Studio Buds (True Wireless Noise Cancelling Earphones)',
        price: 629,
        rating: 4,
        quantity: 1,
        total_amount: 629,
        shipping_fee: 0,
      },
      {
        available_unit: 10,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        id: 'X3uOpsKhM3qTvMEVoE0d',
        image_url: '/images/iphone-13-pro.png',
        name: 'iPhone 13 Pro (512Gb)',
        price: 6299,
        rating: 4,
        quantity: 1,
        total_amount: 6299,
        shipping_fee: 0,
      },
      {
        available_unit: 4,
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        id: 'neySeaonau708qJlZTIO',
        image_url: '/images/ipad-mini.png',
        name: 'iPad Mini (256GB)',
        price: 2299,
        rating: 3,
        quantity: 1,
        total_amount: 2299,
        shipping_fee: 0,
      },
    ];

    dispatch(cartActions.SET_ITEMS(DUMMY_DATA));
  };
};
