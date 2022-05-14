import { AiOutlineGift } from 'react-icons/ai';
import { BsTruck, BsShieldCheck } from 'react-icons/bs';

import Card from 'components/UI/Card';

import classes from './ProductFeatures.module.scss';

const ProductFeatures = () => {
  return (
    <Card className={classes['product-features']}>
      <div className={classes.feature}>
        <AiOutlineGift className={classes.icon} />
        <strong>100% Original</strong>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean.</p>
      </div>
      <div className={classes.feature}>
        <BsShieldCheck className={classes.icon} />
        <strong>1 Year Warranty</strong>
        <p>Providing 1 year global manufacturer warranty.</p>
      </div>
      <div className={classes.feature}>
        <BsTruck className={classes.icon} />
        <strong>Fast Delivery</strong>
        <p>Delivery to your doorstep within 3 days.</p>
      </div>
    </Card>
  );
};

export default ProductFeatures;
