import Card from 'components/UI/Card';
import { useHistory } from 'react-router-dom';

import classes from './AddressItem.module.scss';

const AddressItem = (props) => {
  const history = useHistory();
  const deliveryHandler = () => {
    history.push('/checkout/address/payment');
  };

  return (
    <Card className={classes['address-item']}>
      <div>
        <strong>{props.name}</strong>
      </div>
      <div>
        <small>{props.address}</small>
      </div>
      <div>
        <small>{`${props.postcode} ${props.city}`}</small>
      </div>
      <div>
        <small>{props.state}</small>
      </div>
      <div>
        <small>{props.phone_no}</small>
      </div>
      <button onClick={deliveryHandler}>Deliver To This Address</button>
    </Card>
  );
};

export default AddressItem;
