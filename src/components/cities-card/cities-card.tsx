import { useState } from 'react';
import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type CitiesCardProps = {
  offer: Offer;
};

function CitiesCard({ offer }: CitiesCardProps): JSX.Element {
  const {
    id,
    name,
    type,
    price,
    city,
    rating,
    isPremium,
    isFavorite,
    imageSrc,
  } = offer;

  const [isActive, setIsActive] = useState(false);

  return (
    <article className="cities__card place-card" id={id}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className="cities__image-wrapper place-card__image-wrapper"
        onMouseEnter={() => {
          setIsActive(true);
          console.log(isActive);
        }}
        onMouseLeave={() => {
          setIsActive(false);
          console.log(isActive);
        }}
      >
        <Link to={AppRoute.Offer}>
          <img
            className="place-card__image"
            src={imageSrc}
            width="260"
            height="200"
            alt={name}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">
            {city} {isFavorite}
          </a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CitiesCard;
