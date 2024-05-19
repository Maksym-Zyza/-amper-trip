import { combineReducers } from '@reduxjs/toolkit';
import { dataReducer } from './dataSlice';
import { filterReducer } from './filterSlice';
import { favoritesReducer } from './favoritesSlice';

export const rootReducer = combineReducers({
  data: dataReducer,
  favorites: favoritesReducer,
  filter: filterReducer,
});
