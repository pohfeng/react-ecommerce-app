import { shopActions } from './shop-silce';

export const fetchShopData = () => {
  return async (dispatch) => {
    const DUMMY_DATA = [
      {
        id: 'aaae189f-7935-434f-9a47-1d4b41025902',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.12,
        rating: 2,
        available_unit: 17,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: 'ad498c63-55df-49b3-ad98-7ee0644e2e26',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.92,
        rating: 2,
        available_unit: 38,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: '2e8c84d4-f0e4-4ec5-973c-053223fd63a3',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.43,
        rating: 1,
        available_unit: 59,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: '7c61faeb-547a-4c0d-a7f5-202f84d8c60f',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.11,
        rating: 4,
        available_unit: 42,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: '15515157-99b5-4a72-90cb-20348a5548e1',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.1,
        rating: 3,
        available_unit: 71,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: '7386e652-262d-4493-8899-1ef670df640a',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.42,
        rating: 4,
        available_unit: 77,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: 'cde26f89-2f81-46ee-ad33-1d528f27cad5',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.98,
        rating: 4,
        available_unit: 77,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: '0c32f8bc-3834-4ed2-83c6-b91f997a5c7c',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.88,
        rating: 4,
        available_unit: 84,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: 'ffcc1d06-cf34-4ea4-a1e4-6820e2a9389f',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.58,
        rating: 4,
        available_unit: 1,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: '89c8cdcd-70e0-4e7c-9086-57c19b9361f3',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.37,
        rating: 2,
        available_unit: 21,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: '59edbbaa-3d78-4a0b-a61d-f1bb69475919',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.86,
        rating: 4,
        available_unit: 74,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: '81fbd9f5-cd34-43b9-9aa1-ee44058d1bcc',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.75,
        rating: 3,
        available_unit: 4,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: 'fc63adc6-347f-4af5-8792-05c3ab52808b',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.36,
        rating: 5,
        available_unit: 47,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: 'a972a5ab-38d1-4375-aa0a-4a1113c49dc8',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.53,
        rating: 2,
        available_unit: 52,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: '5e06a38b-c2f3-45c5-9c56-d6ad7b01627a',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.49,
        rating: 3,
        available_unit: 31,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: 'e8e52edb-4aa1-4b58-af76-a542d5d0470b',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.33,
        rating: 1,
        available_unit: 43,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: 'a7e14e36-7e45-43b2-8aa9-6ff2ad7986a7',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.18,
        rating: 4,
        available_unit: 76,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: '9bd9d9d3-d1f3-4b95-97c4-b779f7f7a7b5',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.41,
        rating: 3,
        available_unit: 59,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: 'bfcbc375-a047-47d5-a5c3-af15ad0a6da7',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.67,
        rating: 4,
        available_unit: 42,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: '55fcd135-84c5-4ccc-aa87-b503a8ef00d0',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.3,
        rating: 2,
        available_unit: 95,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: '2236755b-3449-4318-a7de-8e12b6a2318c',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.51,
        rating: 2,
        available_unit: 95,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: '6e43313a-b6dc-4424-92bc-2aae0b8d9dcf',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.84,
        rating: 1,
        available_unit: 44,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: '2d67579b-8fed-47b3-a5a5-8b7931160391',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.33,
        rating: 1,
        available_unit: 18,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: 'f032ff5b-6736-4bc5-bbf5-e618e5f2e195',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.56,
        rating: 5,
        available_unit: 31,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: 'e0be1d37-c947-4e32-987e-7706189fe8cc',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.37,
        rating: 5,
        available_unit: 97,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: 'b30c8819-47fd-445a-ba7d-f29194b1172e',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.73,
        rating: 5,
        available_unit: 18,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: 'fd382408-3746-4d17-ac30-73ebea84a4a7',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.74,
        rating: 1,
        available_unit: 8,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
    ];
    dispatch(shopActions.SET_ITEMS(DUMMY_DATA));
  };
};

export const fetchDataDetails = (id) => {
  return async (dispatch) => {
    const DUMMY_DATA = {
      id: 'fd382408-3746-4d17-ac30-73ebea84a4a7',
      name: 'Apple iPhone 13 (512GB, Pink)',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      price: 1.74,
      rating: 1,
      available_unit: 8,
      image_url: '/images/iphone-12-64gb(3399).png',
    };

    dispatch(shopActions.SET_ITEM_DETAILS(DUMMY_DATA));
  };
};

export const fetchRelatedProducts = (id) => {
  return async (dispatch) => {
    const DUMMY_DATA = [
      {
        id: '2d67579b-8fed-47b3-a5a5-8b7931160391',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.33,
        rating: 1,
        available_unit: 18,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: 'f032ff5b-6736-4bc5-bbf5-e618e5f2e195',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.56,
        rating: 5,
        available_unit: 31,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: 'e0be1d37-c947-4e32-987e-7706189fe8cc',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.37,
        rating: 5,
        available_unit: 97,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: 'b30c8819-47fd-445a-ba7d-f29194b1172e',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.73,
        rating: 5,
        available_unit: 18,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
      {
        id: 'fd382408-3746-4d17-ac30-73ebea84a4a7',
        name: 'Apple iPhone 13 (512GB, Pink)',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 1.74,
        rating: 1,
        available_unit: 8,
        image_url: '/images/iphone-12-64gb(3399).png',
      },
    ];

    dispatch(shopActions.SET_RELATED_PRODUCTS(DUMMY_DATA));
  };
};
