import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { BsPersonCircle } from 'react-icons/bs';

import ShopPage from './pages/ShopPage';
import ProductPage from 'pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';

import SignInForm from 'components/Auth/SignInForm';
import SignUpForm from 'components/Auth/SignUpForm';

import './App.scss';

import { fetchShopData } from 'store/shop-actions';
import { fetchCartItems } from 'store/cart-actions';
import { fetchUserAddress, logOut } from 'store/user-actions';
import { userActions } from 'store/user-slice';

function App() {
  const dispatch = useDispatch();

  const showSignInForm = useSelector((state) => state.user.showSignInForm);
  const showSignUpForm = useSelector((state) => state.user.showSignUpForm);
  const signedIn = useSelector((state) => state.user.signedIn);
  const cartItemCount = useSelector((state) => state.cart.items.length);

  useEffect(() => {
    const initialToken = localStorage.getItem('token');
    if (initialToken) {
      dispatch(userActions.SET_SIGNED_IN(true));
    }
    dispatch(fetchShopData({}));
    dispatch(fetchCartItems());
    dispatch(fetchUserAddress());
  }, [dispatch]);

  const openModalHandler = () => {
    dispatch(userActions.SET_SHOW_SIGN_IN(true));
  };

  const signOutHandler = () => {
    dispatch(logOut());
  };

  const signInBtn = (
    <div className="sign-in">
      <button onClick={openModalHandler}>Sign In</button>
    </div>
  );

  const signedInIcon = (
    <div className="signed-in">
      <BsPersonCircle className="icon" />
      <button className="sign-out" onClick={signOutHandler}>
        Sign Out
      </button>
    </div>
  );

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
        {!signedIn && signInBtn}
        {signedIn && signedInIcon}
      </nav>
      {showSignInForm && <SignInForm />}
      {showSignUpForm && <SignUpForm />}
      <main className="main-content">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/shop" />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="/product-details/:id">
            <ProductPage />
          </Route>
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
          {/* <Route path="/wish-list"></Route>
      <Route path="/checkout"></Route> */}
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
