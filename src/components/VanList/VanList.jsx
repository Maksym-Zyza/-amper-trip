import React from 'react';
import style from './VanList.module.scss';
import { Like, Location, Star } from 'components/Icons';
import { DetailsItem } from 'components/DetailsItem/DetailsItem';
import { Button } from 'components/UI/Button/Button';

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
              <div className={style.firstLine}>
                <p>{item.name}</p>
                <p>
                  €{item.price}
                  <Like />
                </p>
              </div>

              <div className={style.secondLine}>
                <Star />
                {item.rating}
                <span> ({`${item.reviews?.length}`} Reviews)</span>
                <span className={style.location}>
                  <Location /> item.location
                </span>
              </div>
              <p>{item.description}</p>
              <ul className={style.detailList}>
                {Object.entries(item.details).map((detail, index) => (
                  <DetailsItem detail={detail} key={index} />
                ))}
              </ul>
              <Button
                text="Show more"
                onClick={() => console.log('handleShowMore')}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default VanList;
