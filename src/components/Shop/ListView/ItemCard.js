import { Link } from 'react-router-dom';

import { FiShoppingCart } from 'react-icons/fi';

import Card from 'components/UI/Card';
import Rating from 'components/Common/Rating/Rating';

import classes from './ItemCard.module.scss';
import { useSelector } from 'react-redux';

const ItemCard = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const itemInCart = cartItems.findIndex((item) => item.id === props.id);
  let actionBtn;

  if (itemInCart) {
    actionBtn = (
      <Link to="" className={classes['btn-view-in-cart']}>
        <FiShoppingCart className={classes.icon} />
        <span>View In Cart</span>
      </Link>
    );
  } else {
    actionBtn = (
      <button className={classes['btn-add-to-cart']}>
        <FiShoppingCart className={classes.icon} />
        <span>Add To Cart</span>
      </button>
    );
  }
  return (
    <Card className={classes.itemCard}>
      <div className={classes.itemImg}>
        <img src={require('images/iphone-13-pink.png')} alt="Item Picuture" />
      </div>
      <div className={classes['card-body']}>
        <h6 className={classes['item-name']}>{props.name}</h6>
        <div className={classes['seller-info']}>
          <span>By </span>
          <Link className={classes.seller}>Apple</Link>
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
