import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/" exact></Route>
      <Route path="/shop"></Route>
      <Route path="/product-detail/:id"></Route>
      <Route path="/wish-list"></Route>
      <Route path="/checkout"></Route>
    </Switch>
  );
}

export default App;
