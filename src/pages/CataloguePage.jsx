import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Pages.module.scss';
import { VanFilters } from 'components/VanFilters/VanFilters';
import VanList from 'components/VanList/VanList';
import { fetchData } from 'store/contacts/slice';
import { getData } from 'store/selectors';

const CataloguePage = () => {
  const data = useSelector(getData);
  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div className={style.cataloguePage}>
      <VanFilters />
      <VanList data={data.items} />
    </div>
  );
};

export default CataloguePage;
