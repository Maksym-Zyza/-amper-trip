import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Pages.module.scss';
import { VanFilters } from 'components/VanFilters/VanFilters';
import VanList from 'components/VanList/VanList';
import { fetchData } from 'store/dataSlice';
import { getData } from 'store/selectors';
import Error from 'components/UI/Error/Error';
import Loader from 'components/UI/Loader/Loader';

const CataloguePage = () => {
  const { adverts, isLoading, error } = useSelector(getData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <>
      {!isLoading && !error && (
        <div className={style.cataloguePage}>
          <VanFilters />
          <VanList data={adverts} />
        </div>
      )}

      {error && <Error error={error} />}
      <Loader isLoading={isLoading} />
    </>
  );
};

export default CataloguePage;
