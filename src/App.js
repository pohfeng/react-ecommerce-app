import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import ShopPage from './pages/ShopPage';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/shop" />
      </Route>
      <Route path="/shop">
        <ShopPage />
      </Route>
      {/* <Route path="/product-detail/:id"></Route>
      <Route path="/wish-list"></Route>
      <Route path="/checkout"></Route> */}
    </Switch>
  );
}

export default App;
