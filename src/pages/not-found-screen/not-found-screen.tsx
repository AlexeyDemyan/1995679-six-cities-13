import { Helmet } from "react-helmet-async";
import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page ">
      <Helmet>
        <title>404 Page Not Found</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Root}>
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;404. Page not found</h1>
    </div>
  );
}

export default NotFoundScreen;
