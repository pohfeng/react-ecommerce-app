import CartList from 'components/Cart/CartItemList';
import CartSummary from 'components/Cart/CartSummary';

import classes from './CheckoutPage.module.scss';

const CheckoutPage = () => {
  return (
    <div className={classes['checkout-page']}>
      <CartList />
      <CartSummary />
    </div>
  );
};

export default CheckoutPage;
