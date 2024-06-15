import { combineReducers } from '@reduxjs/toolkit';
import todoList from './todoList';

const rootReducer = combineReducers({
  todoList,
});

export default rootReducer;
