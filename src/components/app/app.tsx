import { Route, BrowserRouter, Routes, useParams } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import { AppRoute,  } from '../../const';
// import { AuthorizationStatus } from '../../const';
// import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { Offer } from '../../types/offer';

// Need to /offer/:id routing, check how it was done

type AppScreenProps = {
  favoritesCount: number;
  offers: Offer[];
  onAnswer: () => void;
};

function App({ favoritesCount, offers, onAnswer }: AppScreenProps): JSX.Element {
  const {id} = useParams();

  console.log(id)

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <MainScreen
                favoritesCount={favoritesCount}
                offers={offers}
              ></MainScreen>
            }
          />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route
            path={AppRoute.Favorites}
            element={
              // <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesScreen favoritesCount={favoritesCount} offers={offers}/>
              // </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferScreen favoritesCount={favoritesCount} onAnswer={onAnswer}/>}
          />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
