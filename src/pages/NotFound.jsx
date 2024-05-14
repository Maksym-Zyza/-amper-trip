import React from 'react';
import style from './Pages.module.scss';

const NotFound = () => {
  return (
    <div className={style.centerPage}>
      <h1>Sorry, the page you are looking for does not exist.</h1>
    </div>
  );
};

export default NotFound;
