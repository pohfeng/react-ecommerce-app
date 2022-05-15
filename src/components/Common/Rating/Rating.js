import { BsStarFill, BsStar } from 'react-icons/bs';

import classes from './Rating.module.scss';

const Rating = (props) => {
  const goodRating = [...Array(props.rating)].map((e, i) => (
    <BsStarFill className={classes.filledStar} key={`good_${i}`} />
  ));
  const badRating = [...Array(5 - props.rating)].map((e, i) => (
    <BsStar key={`bad_${i}`} className={classes.outlineStar} />
  ));

  return (
    <div className={classes['item-rating']}>
      {goodRating}
      {badRating}
    </div>
  );
};

export default Rating;
