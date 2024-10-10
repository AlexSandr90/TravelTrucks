import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const getClassName = ({ isActive }: { isActive: boolean }) =>
  clsx(css.link, isActive && css.active);

const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <li>
        <NavLink className={getClassName} to={'/'}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={getClassName} to={'/catalog'}>
          Catalog
        </NavLink>
      </li>
    </nav>
  );
};

export default Navigation;
