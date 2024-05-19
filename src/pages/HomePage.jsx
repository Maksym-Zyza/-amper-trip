import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Pages.module.scss';
import VanList from 'components/VanList/VanList';
import { fetchData } from 'store/contacts/slice';
import { getData } from 'store/selectors';

const HomePage = () => {
  const data = useSelector(getData);
  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <VanList data={data.items} />
    </div>
  );
};

export default HomePage;
