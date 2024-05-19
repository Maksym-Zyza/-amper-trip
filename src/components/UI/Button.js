import React from 'react';
import style from './Button.module.scss';

export const Button = ({ text, ...props }) => {
  return (
    <button className={style.btn} {...props}>
      {text}
    </button>
  );
};
