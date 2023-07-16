import MainScreen from '../../pages/welcome/main-screen';

type AppScreenProps = {
  favoritesCount: number;
}

function App({favoritesCount}: AppScreenProps): JSX.Element {
  return <MainScreen favoritesCount={favoritesCount}></MainScreen>;
}

export default App;
