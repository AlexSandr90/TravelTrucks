import css from './Header.module.css';
import logo from '../../img/icons.svg';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className={css.header}>
      <a href="/">
        <svg className={css.logo}>
          <use href={`${logo}#logo`} />
        </svg>
      </a>

      <Navigation />
    </header>
  );
};

export default Header;
