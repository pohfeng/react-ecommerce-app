import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { HiHeart, HiOutlineHeart, HiOutlineShoppingCart } from 'react-icons/hi';
import { BsStarFill, BsStar } from 'react-icons/bs';

import Card from 'components/UI/Card';
import Colors from './Variants/Colors';

import classes from './ProductDetails.module.scss';

import { fetchDataDetails } from '../../store/shop-actions';

const itemColorVariants = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
];

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const itemDetails = useSelector((state) => state.shop.itemDetails);
  const { rating = 0 } = itemDetails;

  useEffect(() => {
    dispatch(fetchDataDetails(id));
  }, [dispatch, id]);

  const goodRating = [...Array(rating)].map((e, i) => (
    <BsStarFill className={classes.filledStar} key={`good_${i}`} />
  ));

  const badRating = [...Array(5 - rating)].map((e, i) => (
    <BsStar key={`bad_${i}`} className={classes.outlineStar} />
  ));

  const stockInfo = itemDetails.available_unit ? 'In Stock' : 'Out of Stock';
  const stockInfoClass = itemDetails.available_unit
    ? classes['in-stock']
    : classes['out-of-stock'];

  const colorVariant = itemColorVariants.map((variant, index) => {
    return <Colors key={`color_${index}`} colorClass={variant} />;
  });

  return (
    <Card className={classes.productDetails}>
      <div className={classes.imgContainer}>
        <img src={require('images/iphone-13-pink.png')} alt="Item Picuture" />
      </div>
      <div className={classes.detailsContainer}>
        <h4>{itemDetails.name}</h4>
        <div className={classes['seller-info']}>
          <span>By </span>
          <Link className={classes.seller} to="">
            Apple
          </Link>
        </div>
        <div className={classes['price-and-rating']}>
          <div className={classes['item-price']}>RM{itemDetails.price}</div>
          <div className={classes['item-rating']}>
            {goodRating}
            {badRating}
          </div>
        </div>
        <div className={classes.availability}>
          <span>Available - </span>
          <span className={stockInfoClass}>{stockInfo}</span>
        </div>
        <p className={classes['item-description']}>{itemDetails.description}</p>
        <div className={classes['free-shipping']}>
          <HiOutlineShoppingCart className={classes.icon} />
          <span>Free Shipping</span>
        </div>
        <hr />
        <h4>Colors</h4>
        <ul className={classes.variation}>{colorVariant}</ul>
        <hr />
        <div className={classes['action-btns']}>
          <button className={classes['btn-add-to-cart']}>
            <HiOutlineShoppingCart className={classes.icon} />
            <span>Add To Cart</span>
          </button>
          {/* <Link to="" className={classes['btn-view-in-cart']}>
          <HiOutlineShoppingCart className={classes.icon} />
          <span>View In Cart</span>
        </Link> */}
          <button className={classes['btn-wishlist']}>
            <HiHeart className={`${classes.icon} ${classes.filledIcon}`} />
            <HiOutlineHeart className={classes.icon} />
            <span>Wishlist</span>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ProductDetails;
