import React from 'react';
import style from './VanList.module.scss';
import VanCard from './VanCard';

const VanList = ({ data, listRef }) => {
  return (
    <div className={style.list} ref={listRef}>
      {data.length > 0 ? (
        data.map(item => <VanCard item={item} key={item._id} />)
      ) : (
        <div className={style.noData}>
          Nothing found, please try again or try later.
        </div>
      )}
    </div>
  );
};

export default VanList;
