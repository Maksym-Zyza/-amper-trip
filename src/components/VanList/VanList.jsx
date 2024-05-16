import React from 'react';
import style from './VanList.module.scss';

const VanList = ({ data }) => {
  return (
    <div className={style.list}>
      {data.length > 0 &&
        data.map(item => (
          <div key={item._id} className={style.itemWrapper}>
            <div className={style.img}>
              <img src={item.gallery[0]} alt="" />
            </div>
            <div className={style.itemContent}>
              <h2>{item.name}</h2>
              <h3>€{item.price}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default VanList;
