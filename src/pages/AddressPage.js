import NewAddressForm from 'components/Address/NewAddressForm';
import AddressList from 'components/Address/AddressList';

import classes from './AddressPage.module.scss';

const AddressPage = () => {
  return (
    <div className={classes['address-page']}>
      <NewAddressForm />
      <AddressList />
    </div>
  );
};

export default AddressPage;
