import { HiHeart, HiOutlineHeart, HiOutlineShoppingCart } from 'react-icons/hi';
import { BsStarFill, BsStar } from 'react-icons/bs';
// import { Link } from 'react-router-dom';

import Card from '../../UI/Card';

import classes from './ItemCard.module.scss';

const ItemCard = (props) => {
  const goodRating = [...Array(props.rating)].map((e, i) => (
    <BsStarFill className={classes.filledStar} key={`good_${i}`} />
  ));
  const badRating = [...Array(5 - props.rating)].map((e, i) => (
    <BsStar key={`bad_${i}`} className={classes.outlineStar} />
  ));

  const imgUrl = `images/${props.image_name}.png`;

  console.log(imgUrl);

  return (
    <Card className={classes['item-card']}>
      <div className={classes['item-img']}>
        <img src={require(imgUrl)} alt="Item Picuture" />
      </div>
      <div className={classes['item-info']}>
        <div className={classes['item-wrapper']}>
          <div className={classes['item-rating']}>
            {goodRating}
            {badRating}
          </div>
          <div className={classes['item-price']}>RM{props.price}</div>
        </div>
        <h6 className={classes['item-name']}>{props.name}</h6>
        <p className={classes['item-description']}>{props.description}</p>
      </div>
      <div className={classes['action-buttons']}>
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
