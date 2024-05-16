import { combineReducers } from '@reduxjs/toolkit';
import { dataReducer } from './contacts/slice';
import { filterReducer } from './filter/slice';

export const rootReducer = combineReducers({
  data: dataReducer,
  filter: filterReducer,
});
