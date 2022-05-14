import { BsStarFill, BsStar } from 'react-icons/bs';

import classes from './CarouselItem.module.scss';

const CarouselItem = ({ itemDetails, itemWidth }) => {
  const goodRating = [...Array(itemDetails.rating)].map((e, i) => (
    <BsStarFill className={classes.filledStar} key={`good_${i}`} />
  ));

  const badRating = [...Array(5 - itemDetails.rating)].map((e, i) => (
    <BsStar key={`bad_${i}`} className={classes.outlineStar} />
  ));

  return (
    <div
      className={classes['carousel-item']}
      style={{ minWidth: `${itemWidth}px`, maxWidth: `${itemWidth}px` }}
    >
      <span className={classes['item-name']}>{itemDetails.name}</span>
      <div>by Apple</div>
      <img src={require('images/iphone-13-pink.png')} alt="Item Picuture" />
      <div className={classes['item-rating']}>
        {goodRating}
        {badRating}
      </div>
      <div className={classes['item-price']}>RM{itemDetails.price}</div>
    </div>
  );
};

export default CarouselItem;
