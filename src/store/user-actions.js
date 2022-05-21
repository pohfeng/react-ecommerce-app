import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from 'firebase.js';

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

export const signIn = ({ email, password }) => {
  return async (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem('token', user.accessToken);
        dispatch(userActions.SET_SIGNED_IN(true));
      })
      .catch((error) => {
        window.alert('Invalid Credential !');
        console.log('error: ', error);
      });
  };
};

export const signUp = () => {
  return async (dispatch) => {
    localStorage.setItem('token', 'fake-token');
    dispatch(userActions.SET_SIGNED_IN(true));
    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     console.log('signup: ', user);
    //     dispatch(userActions.SET_SIGNED_IN(true));
    //   })
    //   .catch((error) => {
    //     console.log('error: ', error);
    //   });
  };
};

export const logOut = () => {
  return async (dispatch) => {
    signOut(auth);
    localStorage.removeItem('token');
    dispatch(userActions.SET_SIGNED_IN(false));
  };
};
