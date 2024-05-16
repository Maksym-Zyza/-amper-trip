import { createSelector } from '@reduxjs/toolkit';

export const getData = state => state.data;

export const getFilterValue = state => state.filter;

export const getFilteredData = createSelector(
  [getData, getFilterValue],
  ({ items }, { filter }) => {
    return items?.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
