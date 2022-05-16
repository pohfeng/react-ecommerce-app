import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { FiShoppingCart } from 'react-icons/fi';

import Card from '../../UI/Card';
import Rating from 'components/Common/Rating/Rating';

import classes from './ItemCard.module.scss';

import { cartActions } from 'store/cart-slice';

const ItemCard = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItems = useSelector((state) => state.cart.items);
  const itemInCart = !!cartItems.find((item) => item.id === props.id);

  const addItemToCartHandler = () => {
    const itemInfo = {
      ...props,
      quantity: 1,
      total_amount: props.price,
      shipping_fee: 0,
    };
    delete itemInfo.description;
    dispatch(cartActions.ADD_ITEM({ itemInfo }));
  };

  const viewDetailsHandler = () => {
    history.push(`/product-details/${props.id}`);
  };

  let actionBtn;

  if (itemInCart) {
    actionBtn = (
      <Link to="/checkout" className={classes['btn-view-in-cart']}>
        <FiShoppingCart className={classes.icon} />
        <span>View In Cart</span>
      </Link>
    );
  } else {
    actionBtn = (
      <button
        className={classes['btn-add-to-cart']}
        onClick={addItemToCartHandler}
      >
        <FiShoppingCart className={classes.icon} />
        <span>Add To Cart</span>
      </button>
    );
  }

  return (
    <Card className={classes['item-card']}>
      <div className={classes['item-img']} onClick={viewDetailsHandler}>
        <img src="/images/iphone-12-64gb(3399).png" alt="Item Picuture" />
      </div>
      <div className={classes['item-info']}>
        <div className={classes['item-wrapper']}>
          <Rating rating={props.rating} />
          <div className={classes['item-price']}>RM{props.price}</div>
        </div>
        <h6 className={classes['item-name']} onClick={viewDetailsHandler}>
          {props.name}
        </h6>
        <p className={classes['item-description']}>{props.description}</p>
      </div>
      <div className={classes['action-buttons']}>
        {/* <button className={classes['btn-wishlist']}>
          <HiHeart className={classes.icon} />
          <HiOutlineHeart className={classes.icon} />
          <span>Wishlist</span>
        </button> */}
        {actionBtn}
      </div>
    </Card>
  );
};

export default ItemCard;
