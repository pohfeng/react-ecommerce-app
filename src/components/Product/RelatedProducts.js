import Card from 'components/UI/Card';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Carousel from 'components/Common/Carousel/Carousel';

import classes from './RelatedProducts.module.scss';

import { fetchRelatedProducts } from '../../store/shop-actions';

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const relatedProducts = useSelector((state) => state.shop.relatedProducts);

  useEffect(() => {
    dispatch(fetchRelatedProducts());
  }, [dispatch]);

  return (
    <Card className={classes.carousel}>
      <div className={classes.tittle}>
        <strong>Related Products</strong>
      </div>
      <div className={classes.description}>
        <small>People also search for this items</small>
      </div>
      <div>
        <Carousel items={relatedProducts} />
      </div>
    </Card>
  );
};

export default ProductCarousel;
