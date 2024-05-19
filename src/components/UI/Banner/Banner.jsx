import React from 'react';
import style from './Banner.module.scss';
import { Button } from 'components/UI/Button/Button';
import { useNavigate } from 'react-router-dom';

export const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className={style.mainBanner}>
      <div className={style.contentWrapper}>
        <h1>
          Leave all worries behind and embark on the journey of your dreams!
        </h1>
        <p>
          Rent a camper and embark on an unforgettable adventure with Camper
          Trip
        </p>
        <div>
          <Button
            text="Book Now"
            onClick={() => {
              navigate('/catalog');
            }}
          />
        </div>
      </div>
      <div className={style.mainImg}>
        <img
          src="https://ftp.goit.study/img/campers-test-task/8-1.webp"
          alt="Camper"
        />
      </div>
    </div>
  );
};
