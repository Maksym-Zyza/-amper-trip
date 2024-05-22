import React, { useState } from 'react';
import style from './Pages.module.scss';
import { useSelector } from 'react-redux';
import { getFavorites } from 'store/selectors';
import { VanFilters } from 'components/VanFilters/VanFilters';
import VanList from 'components/VanList/VanList';

const FavoritesPage = () => {
  const favorites = useSelector(getFavorites);
  const [filteredAdverts, setFilteredAdverts] = useState(favorites);

  return (
    <div className={style.cataloguePage}>
      <VanFilters adverts={favorites} setFilteredAdverts={setFilteredAdverts} />
      <VanList data={filteredAdverts} />
    </div>
  );
};

export default FavoritesPage;
