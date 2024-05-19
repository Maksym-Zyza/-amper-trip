import { combineReducers } from '@reduxjs/toolkit';
import { dataReducer } from './dataSlice';
import { filterReducer } from './filterSlice';

export const rootReducer = combineReducers({
  data: dataReducer,
  filter: filterReducer,
});
