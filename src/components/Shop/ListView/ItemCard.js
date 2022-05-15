import { Link } from 'react-router-dom';

import { HiHeart, HiOutlineHeart, HiOutlineShoppingCart } from 'react-icons/hi';

import Card from 'components/UI/Card';
import Rating from 'components/Common/Rating/Rating';

import classes from './ItemCard.module.scss';

const ItemCard = (props) => {
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
        <button className={classes['btn-wishlist']}>
          <HiHeart className={classes.icon} />
          <HiOutlineHeart className={classes.icon} />
          <span>Wishlist</span>
        </button>
        <button className={classes['btn-add-to-cart']}>
          <HiOutlineShoppingCart className={classes.icon} />
          <span>Add To Cart</span>
        </button>
        {/* <Link to="" className={classes['btn-view-in-cart']}>
          <HiOutlineShoppingCart className={classes.icon} />
          <span>View In Cart</span>
        </Link> */}
      </div>
    </Card>
  );
};

export default ItemCard;
