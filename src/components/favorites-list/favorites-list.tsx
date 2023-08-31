import { Offer } from '../../types/offer';
import FavoriteCard from '../favorite-card/favorite-card';

type FavoritesListProps = {
  offers: Offer[];
};

function FavoritesList({ offers }: FavoritesListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      {offers.map((offer) => (
        <FavoriteCard key={offer.id} offer={offer} />
      ))}
    </ul>
  );
}

export default FavoritesList;
