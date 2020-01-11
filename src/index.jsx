import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Browser,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from './views/Home';
import Cart from './views/Cart';

function App() {
  return (
    <Browser>
      <section className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/carrinho" component={Cart} />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </section>
    </Browser>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
