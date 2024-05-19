import React from 'react';
import style from './VanFilters.module.scss';
import { Location } from 'components/Icons';
import { Button } from 'components/UI/Button/Button';
import { vehicleEquipment, vehicleType } from './helper';
import { Checkbox } from 'components/UI/Checkbox/Checkbox';
import { RadioButton } from 'components/UI/RadioButton/RadioButton';

export const VanFilters = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const { location, automatic, AC, TV, kitchen, shower, venType } =
      e.target.elements;
    const data = {
      location: location.value,
      automatic: automatic.checked,
      AC: AC.checked,
      TV: TV.checked,
      kitchen: kitchen.checked,
      shower: shower.checked,
      venType: venType.value,
    };

    console.log(data);
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
            {vehicleType.map(({ name, label, icon }) => (
              <RadioButton key={label} name={name} label={label} icon={icon} />
            ))}
          </div>
        </div>
        <Button type="submit" text="Search" />
      </form>
    </div>
  );
};
