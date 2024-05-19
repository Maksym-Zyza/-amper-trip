import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Pages.module.scss';
import { fetchData } from 'store/contacts/slice';
import { getData } from 'store/selectors';
import { Button } from 'components/UI/Button';
import { Logo } from 'components/Icons';

const HomePage = () => {
  const data = useSelector(getData);
  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className={style.homePage}>
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
            <Button text="Book Now" />
          </div>
        </div>
        <div className={style.mainImg}>
          <img
            src="https://ftp.goit.study/img/campers-test-task/8-1.webp"
            alt="Camper"
          />
        </div>
      </div>

      <div className={style.logo}>
        <Logo />
      </div>

      <div className={style.description}>
        Camper Trip is your trusted partner for unforgettable travels. We offer
        modern and comfortable campers that will make your trip as convenient
        and enjoyable as possible. Our mission is to provide you with the
        freedom to explore and enjoy every moment of your journey. Whether you
        are planning a short weekend getaway or a long expedition, "Camper Trip"
        is always ready to provide you with everything you need for a
        comfortable trip. Join us and discover new horizons.
      </div>
    </div>
  );
};

export default HomePage;
