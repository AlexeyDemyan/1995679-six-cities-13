import { ReactNode } from 'react';
import MainScreen from '../../pages/welcome/main-screen';

type AppScreenProps = {
  favoritesCount: number;
  children?: ReactNode;
}

function App({favoritesCount}: AppScreenProps): JSX.Element {
  return <MainScreen favoritesCount={favoritesCount}></MainScreen>;
}

export default App;
