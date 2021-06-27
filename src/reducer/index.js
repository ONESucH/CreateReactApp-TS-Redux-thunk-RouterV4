import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import users from '../reducer/users';

export default (history) => combineReducers({
  router: connectRouter(history),
  users: users
});