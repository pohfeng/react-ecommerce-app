import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import ShopPage from './pages/ShopPage';
import ProductPage from 'pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import PaymentPage from 'pages/PaymentPage';
import AddressPage from 'pages/AddressPage';

function App() {
  return (
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
      <Route path="/payment">
        <PaymentPage />
      </Route>
      <Route path="/address">
        <AddressPage />
      </Route>
      {/* <Route path="/wish-list"></Route>
      <Route path="/checkout"></Route> */}
    </Switch>
  );
}

export default App;
