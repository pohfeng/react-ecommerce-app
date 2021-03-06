import Card from 'components/UI/Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classes from './PriceDetails.module.scss';

import { fetchCartItems } from 'store/cart-actions';

const PriceDetails = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalItemAmount = cartItems.reduce((total, item) => {
    return total + item.total_amount;
  }, 0);
  const totalDeliveryFee = cartItems.reduce((total, item) => {
    return total + item.shipping_fee;
  }, 0);

  const totalPayment = totalItemAmount + totalDeliveryFee;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  return (
    <div>
      <Card className={classes['cart-summary']}>
        <div>
          <strong>Price Details</strong>
        </div>
        <div>
          <small>Total Amount</small>
          <small className={classes['total-amount']}>
            RM {totalItemAmount.toFixed(2)}
          </small>
        </div>
        <div>
          <small>Shipping Fee</small>
          <small className={classes['total-amount']}>
            RM {totalDeliveryFee.toFixed(2)}
          </small>
        </div>
        <hr />
        <div>
          <small>Total Payment</small>
          <small className={classes['total-amount']}>
            RM {totalPayment.toFixed(2)}
          </small>
        </div>
      </Card>
    </div>
  );
};

export default PriceDetails;
