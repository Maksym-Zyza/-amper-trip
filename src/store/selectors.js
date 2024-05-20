import { createSelector } from '@reduxjs/toolkit';

export const getAdverts = state => state.data;

export const getFavorites = state => state.favorites;

export const getFilterValue = state => state.filter;

export const getFilteredData = createSelector(
  [getAdverts, getFilterValue],
  ({ items }, { filter }) => {
    return items?.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
