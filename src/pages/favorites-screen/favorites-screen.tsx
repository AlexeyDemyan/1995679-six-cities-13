import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import FavoritesList from '../../components/favorites-list/favorites-list';
import { Offer } from '../../types/offer';

type FavoritesScreenProps = {
  favoritesCount: number;
  offers: Offer[]
};

function FavoritesScreen({
  favoritesCount,
  offers
}: FavoritesScreenProps): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>Your Favorites</title>
      </Helmet>
      <Header favoritesCount={favoritesCount} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers}/>
          </section>
        </div>
      </main>

      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;