import Card from 'components/UI/Card';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import classes from './CartSummary.module.scss';

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const history = useHistory();

  const totalItemAmount = cartItems.reduce((total, item) => {
    return total + item.total_amount;
  }, 0);
  const totalDeliveryFee = cartItems.reduce((total, item) => {
    return total + item.shipping_fee;
  }, 0);

  const totalPayment = totalItemAmount + totalDeliveryFee;

  const placeOrderHandler = () => {
    history.push('/checkout/address');
  };

  return (
    <div>
      <Card className={classes['cart-summary']}>
        <div>
          <strong>Summary</strong>
        </div>
        <hr />
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
        <button className={classes['order-btn']} onClick={placeOrderHandler}>
          Place Order
        </button>
      </Card>
    </div>
  );
};

export default CartSummary;
