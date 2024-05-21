import React, { useContext } from 'react';
import style from './VanFilters.module.scss';
import { Location } from 'components/Icons';
import { Button } from 'components/UI/Button/Button';
import { vehicleEquipment, vehicleType } from './helper';
import { Checkbox } from 'components/UI/Checkbox/Checkbox';
import { RadioButton } from 'components/UI/RadioButton/RadioButton';
import { getFilterParams } from 'utils/filterParams';
import { filterData } from 'utils/filterAdverts';
import { useDispatch } from 'react-redux';
import { filterAdvertsList } from 'store/dataSlice';
import Pagination from 'context';
import toast from 'react-hot-toast';

export const VanFilters = ({ adverts }) => {
  const dispatch = useDispatch();
  const { resetPage } = useContext(Pagination);

  const handleSubmit = e => {
    e.preventDefault();
    const filterParams = getFilterParams(e.target);
    let filteredData = filterData(adverts, filterParams);
    resetPage();

    dispatch(filterAdvertsList(filteredData));
    toast.success('Filtered successfully');
    resetFilterParams(e.target);
  };

  const resetFilterParams = form => {
    form.reset();
  };

  return (
    <div className={style.filtersWrapper}>
      <form onSubmit={handleSubmit}>
        <div className={style.location}>
          <label htmlFor="location">Location</label>
          <input type="text" name="location" />
          <Location />
        </div>
        <div className={style.filterSection}>
          <h2>Filters</h2>
          <h3>Vehicle Equipment</h3>
          <div className={style.list}>
            {vehicleEquipment.map(({ name, label, icon }) => (
              <Checkbox key={label} name={name} label={label} icon={icon} />
            ))}
          </div>
          <h3>Vehicle Type</h3>
          <div className={style.list}>
            {vehicleType.map(({ value, label, icon }) => (
              <RadioButton
                key={label}
                value={value}
                label={label}
                icon={icon}
              />
            ))}
          </div>
        </div>
        <Button type="submit" text="Search" />
      </form>
    </div>
  );
};
