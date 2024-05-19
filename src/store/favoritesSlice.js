import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    toggleFavorites(state, action) {
      const isExists = state.find(_id => _id === action.payload);
      if (!isExists) {
        state.push(action.payload);
      } else {
        return state.filter(id => id !== action.payload);
      }
    },
  },
});

export const { toggleFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
