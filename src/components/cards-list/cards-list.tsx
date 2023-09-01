import CitiesCard from '../../components/cities-card/cities-card';
import { Offer } from '../../types/offer';

type CardsListProps = {
  offers: Offer[];
};

function CardsList({ offers }: CardsListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CitiesCard key={offer.id} offer={offer}/>
      ))}
    </div>
  );
}

export default CardsList;
