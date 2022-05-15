import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddressItem from './AddressItem/AddressItem';

import classes from './AddressList.module.scss';

import { fetchUserAddress } from 'store/user-actions';

const AddressList = () => {
  const dispatch = useDispatch();
  const addressList = useSelector((state) => state.user.addressList);

  useEffect(() => {
    dispatch(fetchUserAddress());
  }, [dispatch]);

  const addressListComponent = addressList.map((address) => {
    return <AddressItem key={address.id} {...address} />;
  });

  return <div className={classes['address-list']}>{addressListComponent}</div>;
};

export default AddressList;
