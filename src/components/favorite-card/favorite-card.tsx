import { Offer } from '../../types/offer';
import { useState } from 'react';

type FavoriteCardProps = {
  offer: Offer;
};

function FavoriteCard({ offer }: FavoriteCardProps): JSX.Element {
  const { id, name, type, price, city, rating, isPremium, imageSrc } = offer;

  const [isActive, setIsActive] = useState(false);

  return (
    <li className="favorites__locations-items" id={id}>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <article className="favorites__card place-card">
          {isPremium ? (
            <div className="place-card__mark">
              <span>Premium</span>
            </div>
          ) : null}
          <div
            className="favorites__image-wrapper place-card__image-wrapper"
            onMouseEnter={() => {
              setIsActive(true);
              console.log(isActive);
            }}
            onMouseLeave={() => {
              setIsActive(false);
              console.log(isActive);
            }}
          >
            <a href="#">
              <img
                className="place-card__image"
                src={imageSrc}
                width={150}
                height={110}
                alt={name}
              />
            </a>
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button
                className="place-card__bookmark-button place-card__bookmark-button--active button"
                type="button"
              >
                <svg
                  className="place-card__bookmark-icon"
                  width={18}
                  height={19}
                >
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{ width: '100%' }} />
                <span className="visually-hidden">{rating}</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <a href="#">Nice, cozy, warm big bed apartment</a>
            </h2>
            <p className="place-card__type">{type}</p>
          </div>
        </article>
      </div>
    </li>
  );
}

export default FavoriteCard;
