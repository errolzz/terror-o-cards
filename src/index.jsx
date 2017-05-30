// all paths start from src/ unless using relative paths
// libs
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import { Link, Route } from "react-router-dom";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";

// reducers
import reducers from "dux/reducers";

// pages
import Home from "pages/home/Home";
import Card from "pages/card/Card";

// css
import "index.css";

// html
import "index.html";

// Create a history of your choosing (we"re using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = [
  ReduxThunk,
  routerMiddleware( history ),
];

// the store
const store = createStore( reducers, applyMiddleware( ...middleware ) );

const icon = require( "assets/images/amp.png" );

// the app
render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <div>
        <Link to="/"><img src={ icon } width="40" alt="" /></Link>
        <Route exact path="/" component={ Home } />
        <Route path="/card/:title" component={ Card } />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById( "app" ),
);
