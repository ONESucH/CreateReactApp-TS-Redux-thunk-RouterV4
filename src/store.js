import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const composedEnhancers = compose(
  applyMiddleware(routerMiddleware(history), thunk),
  ...enhancers,
);

export const store = createStore(
  rootReducer(history),
  initialState,
  composedEnhancers
);