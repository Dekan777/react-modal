import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import css from './Header.module.css';

export const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <>
      <nav className={css.nav}>
        <NavLink to="/" end className={buildLinkClass}>
          <p className={css.homeCont}>Home</p>
        </NavLink>
        <NavLink to="/movies" end className={buildLinkClass}>
          <p className={css.searchCont}>Search Movies</p>
        </NavLink>
      </nav>
    </>
  );
};
