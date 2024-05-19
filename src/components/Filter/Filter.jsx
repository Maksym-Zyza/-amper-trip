import React from 'react';
import { ReactComponent as Search } from '../Icons/Search.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'store/filterSlice';
import { getFilterValue } from 'store/selectors';

export const Filter = () => {
  const { filter } = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="filter">
      <label htmlFor="filter">Find contacts by name:</label>
      <input type="text" name="filter" value={filter} onChange={handleChange} />
      <Search />
    </div>
  );
};
