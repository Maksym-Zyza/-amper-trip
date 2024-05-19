import React from 'react';
import style from './DetailsItem.module.scss';
import { iconDetails } from './helper';

export const DetailsItem = ({ detail }) => {
  const [name, value] = detail;
  return (
    <li className={style.detailsItem}>
      <span className={style.icon}>{iconDetails[name]}</span>
      <span className={style.value}>{value}</span>
      {name}
    </li>
  );
};
