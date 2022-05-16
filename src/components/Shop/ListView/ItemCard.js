import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { FiShoppingCart } from 'react-icons/fi';

import Card from 'components/UI/Card';
import Rating from 'components/Common/Rating/Rating';

import classes from './ItemCard.module.scss';

import { cartActions } from 'store/cart-slice';

const ItemCard = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItems = useSelector((state) => state.cart.items);
  const itemInCart = cartItems.find((item) => item.id === props.id);

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
    <Card className={classes.itemCard}>
      <div className={classes.itemImg} onClick={viewDetailsHandler}>
        <img src={require('images/iphone-13-pink.png')} alt="Item Picuture" />
      </div>
      <div className={classes['card-body']}>
        <h6 className={classes['item-name']} onClick={viewDetailsHandler}>
          {props.name}
        </h6>
        <div className={classes['seller-info']}>
          <span>By </span>
          <span className={classes.seller}>Apple</span>
        </div>
        <Rating rating={props.rating} />
        <p className={classes['item-description']}>{props.description}</p>
      </div>
      <div className={classes.itemOptions}>
        <div className={classes['item-price']}>RM{props.price}</div>
        {actionBtn}
        {/* <button className={classes['btn-wishlist']}>
          <HiHeart className={classes.icon} />
          <HiOutlineHeart className={classes.icon} />
          <span>Wishlist</span>
        </button> */}
      </div>
    </Card>
  );
};

export default ItemCard;
