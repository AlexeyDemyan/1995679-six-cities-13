import MainScreen from '../../pages/welcome-screen/main-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';

type AppScreenProps = {
  favoritesCount: number;
}

function App({favoritesCount}: AppScreenProps): JSX.Element {
  // return <MainScreen favoritesCount={favoritesCount}></MainScreen>;
  // return <OfferScreen favoritesCount={favoritesCount}/>
  // return <LoginScreen/>
  return <FavoritesScreen favoritesCount={favoritesCount}/>
}

export default App;
