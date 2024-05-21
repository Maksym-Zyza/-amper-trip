import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFavorites } from '../../store/selectors';
import style from './VanList.module.scss';
import { Like, Location, Star } from 'components/Icons';
import { DetailsItem } from 'components/DetailsItem/DetailsItem';
import { Button } from 'components/UI/Button/Button';
import { toggleFavorites } from 'store/favoritesSlice';
import { Modal } from 'components/UI/Modal/Modal';
import { CardDetails } from 'components/CardDetails/CardDetails';

const VanCard = ({ item }) => {
  const favorites = useSelector(getFavorites);
  const dispatch = useDispatch();
  const handleFavorites = () => dispatch(toggleFavorites(item));
  const isFavorite = favorites.find(el => el._id === item._id);

  const [card, setCard] = useState();
  const [isDescription, setIsDescription] = useState(true);
  const modalRef = useRef();

  const handleShowMore = card => {
    modalRef.current.open();
    setIsDescription(false);
    setCard(card);
  };

  return (
    <div key={item._id} className={style.itemWrapper}>
      <Modal ref={modalRef}>
        <CardDetails
          card={card}
          isDescription={isDescription}
          setIsDescription={setIsDescription}
        />
      </Modal>
      <div className={style.img}>
        <img src={item.gallery[0]} alt="" />
      </div>

      <div className={style.itemContent}>
        <div className={style.firstLine}>
          <p>{item.name}</p>
          <p>
            €{item.price}
            <Like
              className={isFavorite ? style.active : ''}
              onClick={handleFavorites}
            />
          </p>
        </div>

        <div className={style.secondLine}>
          <Star />
          {item.rating}
          <span> ({`${item.reviews?.length}`} Reviews)</span>
          <span className={style.location}>
            <Location /> {item.location}
          </span>
        </div>
        <p>{item.description}</p>
        <ul className={style.detailList}>
          {Object.entries(item.details).map((detail, index) => (
            <DetailsItem detail={detail} key={index} />
          ))}
        </ul>
        <Button text="Show more" onClick={() => handleShowMore(item)} />
      </div>
    </div>
  );
};

export default VanCard;
