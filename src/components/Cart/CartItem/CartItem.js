import { DateTime } from 'luxon';
import { MdClear } from 'react-icons/md';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import Rating from 'components/Common/Rating/Rating';
import Card from 'components/UI/Card';
import classes from './CartItem.module.scss';

import { cartActions } from 'store/cart-slice';
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
  const dispatch = useDispatch();

  const stockInfo = props.available_unit ? 'In Stock' : 'Out of Stock';
  const stockInfoClass = props.available_unit
    ? classes['in-stock']
    : classes['out-of-stock'];

  const deliveryDate = DateTime.local()
    .plus({ days: 4 })
    .toFormat('dd LLL yyyy');

  const decreaseQtyHandler = () => {
    dispatch(cartActions.DECREASE_QTY({ id: props.id }));
  };

  const increaseQtyHandler = () => {
    dispatch(cartActions.INCREASE_QTY({ id: props.id }));
  };

  const removeItemHandler = () => {
    dispatch(cartActions.REMOVE_ITEM({ id: props.id }));
  };

  return (
    <Card className={classes['cart-item']}>
      <div className={classes['item-img']}>
        <img src={require('images/iphone-13-pink.png')} alt="Item Picuture" />
      </div>
      <div className={classes['item-info']}>
        <div className={classes['item-name']}>
          <strong>{props.name}</strong>
        </div>
        <div className={classes['seller-info']}>
          <small>By Apple</small>
        </div>
        <Rating rating={props.rating} />
        <div className={classes['item-availability']}>
          <span className={stockInfoClass}>{stockInfo}</span>
        </div>
        <div className={classes['item-quantity']}>
          <span>Quantity</span>
          <div className={classes['qty-handler']}>
            <button
              className={classes['minus-btn']}
              onClick={decreaseQtyHandler}
              disabled={props.quantity === 1}
            >
              <AiOutlineMinus />
            </button>
            <span className={classes['qty-display']}>{props.quantity}</span>
            <button
              className={classes['add-btn']}
              onClick={increaseQtyHandler}
              disabled={props.quantity === props.available_unit}
            >
              <AiOutlinePlus />
            </button>
          </div>
        </div>
        <div className={classes['delivery-info']}>
          <small>Delivery By {deliveryDate}</small>
        </div>
      </div>
      <div className={classes['item-options']}>
        <div className={classes['item-price']}>
          RM {props.total_amount.toFixed(2)}
        </div>
        <div className={classes['shipping-info']}>
          <strong>Free Shipping</strong>
        </div>
        <button className={classes['remove-btn']} onClick={removeItemHandler}>
          <MdClear />
          <span>Remove</span>
        </button>
      </div>
    </Card>
  );
};

export default CartItem;
