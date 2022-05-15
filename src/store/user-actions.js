import { userActions } from './user-slice';

export const fetchUserAddress = () => {
  return async (dispatch) => {
    const DUMMY_DATA = [
      {
        id: 'ae32f2e4-9100-4aab-a706-46be191fbe48',
        name: 'ALI BIN ABU',
        address: '150, Jalan Contoh, Taman Yayasan',
        postcode: '43000',
        city: 'Kajang',
        state: 'Selangor',
        phone_no: '012-34567890',
      },
      {
        id: 'eb35e7a1-9100-4aab-a706-46be191fbe48',
        name: 'TAN HOCK LIM',
        address: '152, Jalan Contoh, Taman Yayasan',
        postcode: '43000',
        city: 'Kajang',
        state: 'Selangor',
        phone_no: '012-34567891',
      },
    ];
    dispatch(userActions.SET_ADDRESS_LIST(DUMMY_DATA));
  };
};
