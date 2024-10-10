import css from './Header.module.css';
import logo from '../../img/icons.svg';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <header className={css.header}>
      <svg className={css.logo}>
        <use href={`${logo}#logo`} />
      </svg>

      <Navigation />
    </header>
  );
};

export default Header;
