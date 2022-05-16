import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

import ShopPage from './pages/ShopPage';
import ProductPage from 'pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';

import './App.scss';

import { fetchShopData } from 'store/shop-actions';
import { fetchCartItems } from 'store/cart-actions';
import { fetchUserAddress } from 'store/user-actions';

function App() {
  const dispatch = useDispatch();
  const cartItemCount = useSelector((state) => state.cart.items.length);

  useEffect(() => {
    dispatch(fetchShopData());
    dispatch(fetchCartItems());
    dispatch(fetchUserAddress());
  }, [dispatch]);

  return (
    <Fragment>
      <nav className="nav-bar">
        <Link to="/" className="app-title">
          React Ecommerce App
        </Link>
        <Link to="/checkout" className="cart-button">
          <FiShoppingCart />
          <span className="item-count">{cartItemCount}</span>
        </Link>
        <div className="sign-in">
          <button to="/checkout">Sign In</button>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/shop" />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/product-detail/:id">
          <ProductPage />
        </Route>
        <Route path="/checkout">
          <CheckoutPage />
        </Route>
        {/* <Route path="/wish-list"></Route>
      <Route path="/checkout"></Route> */}
      </Switch>
    </Fragment>
  );
}

export default App;
