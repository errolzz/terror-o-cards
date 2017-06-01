// all paths start from src/ unless using relative paths
// libs
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import { Link, Route, Switch } from "react-router-dom";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";

// reducers
import reducers from "dux/reducers";

// pages
import ConnectedMain from "pages/main/ConnectedMain";

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

// the app
render(
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <Switch>
        <Route exact path="/:slug" component={ ConnectedMain } />
        <Route component={ ConnectedMain } />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById( "app" ),
);
