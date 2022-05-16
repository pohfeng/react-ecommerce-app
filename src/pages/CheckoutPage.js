import CartList from 'components/Cart/CartItemList';
import CartSummary from 'components/Cart/CartSummary';
import NewAddressForm from 'components/Address/NewAddressForm';
import AddressList from 'components/Address/AddressList';
import PaymentOptions from 'components/Payment/PaymentOptions';
import PriceDetails from 'components/Payment/PriceDetails';

import { Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { IoHomeOutline } from 'react-icons/io5';
import { FiChevronRight, FiShoppingCart } from 'react-icons/fi';
import { FaRegAddressCard } from 'react-icons/fa';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';

import classes from './CheckoutPage.module.scss';
import { useHistory } from 'react-router-dom';

const CheckoutPage = () => {
  const history = useHistory();
  const navigationHandler = (path) => {
    history.push(path);
  };

  return (
    <Fragment>
      <div className="page-title">
        <b>Checkout</b>
      </div>
      <div className={classes['checkout-flow']}>
        <Link className={classes['home-btn']} to="/shop">
          <IoHomeOutline />
        </Link>

        <Route path="/checkout">
          <div className={classes['right-arrow']}>
            <FiChevronRight />
          </div>
          <button
            className={classes['nav-button']}
            onClick={navigationHandler.bind(null, '/checkout')}
          >
            <div className={classes['icon-container']}>
              <FiShoppingCart />
            </div>
            <div className={classes['description']}>
              <strong>Cart</strong>
              <small>View cart item</small>
            </div>
          </button>
        </Route>
        <Route path="/checkout/address">
          <div className={classes['right-arrow']}>
            <FiChevronRight />
          </div>
          <button
            className={classes['nav-button']}
            onClick={navigationHandler.bind(null, '/checkout/address')}
          >
            <div className={classes['icon-container']}>
              <FaRegAddressCard />
            </div>
            <div className={classes['description']}>
              <strong>Address</strong>
              <small>View Address List</small>
            </div>
          </button>
        </Route>
        <Route path="/checkout/address/payment">
          <div className={classes['right-arrow']}>
            <FiChevronRight />
          </div>
          <button className={classes['nav-button']}>
            <div className={classes['icon-container']}>
              <RiMoneyDollarCircleLine />
            </div>
            <div className={classes['description']}>
              <strong>Payment</strong>
              <small>Make payment here</small>
            </div>
          </button>
        </Route>
      </div>

      <div className={classes['checkout-page']}>
        <Switch>
          <Route path="/checkout" exact>
            <CartList />
            <CartSummary />
          </Route>
          <Route path="/checkout/address" exact>
            <NewAddressForm />
            <AddressList />
          </Route>
          <Route path="/checkout/address/payment" exact>
            <PaymentOptions />
            <PriceDetails />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
};

export default CheckoutPage;
