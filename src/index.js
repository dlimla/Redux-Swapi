import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
// rootReducer from ./reducers
import rootReducer from "./reducers";
// needed dependancies

// applyMiddleware from redux X
import { createStore, applyMiddleware } from "redux";

// logger from redux-logger
import logger from 'redux-logger'

// thunk from redux-thunk
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk)
  /* applyMiddleware goes here */
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
