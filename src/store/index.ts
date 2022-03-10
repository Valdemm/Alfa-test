import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";

const composeEnhancers =
  // @ts-expect-error
  window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = applyMiddleware(thunk);

export const store = createStore(reducer, composeEnhancers(enhancer));
