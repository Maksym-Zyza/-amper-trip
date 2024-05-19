import React from 'react';
import style from './Button.module.scss';

export const Button = ({ text, onClick, ...props }) => {
  return (
    <button className={style.btn} onClick={onClick} {...props}>
      {text}
    </button>
  );
};
