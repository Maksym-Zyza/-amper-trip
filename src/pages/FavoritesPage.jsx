import React from 'react';
import style from './Pages.module.scss';
import { useSelector } from 'react-redux';
import { getFavorites } from 'store/selectors';
import { VanFilters } from 'components/VanFilters/VanFilters';
import VanList from 'components/VanList/VanList';

const FavoritesPage = () => {
  const favorites = useSelector(getFavorites);

  return (
    <div className={style.cataloguePage}>
      <VanFilters adverts={favorites} />
      <VanList data={favorites} />
    </div>
  );
};

export default FavoritesPage;
