import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { createStore } from "redux";
import { Provider, applyMiddleware } from 'react-redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";
import catsReducer from '/features/cats/catsSlice.js';

const store = createStore(catsReducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById("root"));
