import React, { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Pages.module.scss';
import { VanFilters } from 'components/VanFilters/VanFilters';
import VanList from 'components/VanList/VanList';
import { fetchData } from 'store/dataSlice';
import { getAdverts } from 'store/selectors';
import Error from 'components/UI/Error/Error';
import Loader from 'components/UI/Loader/Loader';
import Pagination from 'context';
import { pagination } from 'utils/pagination';
import { Button } from 'components/UI/Button/Button';
import { scrollTo } from 'utils/scrollTo';

const CataloguePage = () => {
  const { adverts, isLoading, error } = useSelector(getAdverts);
  const [filteredAdverts, setFilteredAdverts] = useState(adverts);
  const dispatch = useDispatch();
  const { currentPage, increasePage } = useContext(Pagination);
  const { cards, isVisible } = pagination(currentPage, filteredAdverts);
  const listRef = useRef();

  useEffect(() => {
    adverts.length && setFilteredAdverts(adverts);
  }, [adverts]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleLoadMore = () => {
    increasePage();
    scrollTo(listRef);
  };
  return (
    <>
      {!isLoading && !error && (
        <div className={style.pageWrapper}>
          <div className={style.cataloguePage}>
            <VanFilters
              adverts={adverts}
              setFilteredAdverts={setFilteredAdverts}
            />
            <VanList data={cards} listRef={listRef} />
          </div>
          {isVisible && <Button text="Load more" onClick={handleLoadMore} />}
        </div>
      )}
      <Error error={error} />
      <Loader isLoading={isLoading} />
    </>
  );
};

export default CataloguePage;
