import { combineReducers } from '@reduxjs/toolkit';
import todoList from './todoList';
import authentication from './authentications'
import product from './product'
import cart from './cart'

const rootReducer = combineReducers({
  todoList,
  authentication,
  product,
  cart
});

export default rootReducer;
