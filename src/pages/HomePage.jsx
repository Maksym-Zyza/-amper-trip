import React from 'react';
import style from './Pages.module.scss';
import { Logo } from 'components/Icons';
import { Banner } from 'components/UI/Banner/Banner';

const HomePage = () => {
  return (
    <div className={style.homePage}>
      <Banner />
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
