import React from 'react';
import style from './DetailsItem.module.scss';

export const DetailsItem = ({ detail }) => {
  const [name, value] = detail;
  return (
    <li className={style.detailsItem}>
      {name}:{value}
    </li>
  );
};
