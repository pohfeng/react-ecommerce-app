import Rating from 'components/Common/Rating/Rating';
import { useHistory } from 'react-router-dom';

import classes from './CarouselItem.module.scss';

const CarouselItem = ({ itemDetails, itemWidth }) => {
  const history = useHistory();

  const clickHandler = () => {
    history.push(`/product-details/${itemDetails.id}`);
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={classes['carousel-item']}
      style={{ minWidth: `${itemWidth}px`, maxWidth: `${itemWidth}px` }}
    >
      <span className={classes['item-name']}>{itemDetails.name}</span>
      <div>by Apple</div>
      <img
        src={itemDetails.image_url}
        alt="Item Picuture"
        onClick={clickHandler}
      />
      <Rating rating={itemDetails.rating} />
      <div className={classes['item-price']}>RM {itemDetails.price}</div>
    </div>
  );
};

export default CarouselItem;
