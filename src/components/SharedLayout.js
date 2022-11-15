import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Loader } from './Loader';
import s from './App.module.css';

export const SharedLayout = () => {
  return (
    <div className={s.Container}>
      <nav className={s.Nav}>
        <NavLink className={s.titleLink} to="/" end>
          Home
        </NavLink>

        {/* НЕ РАБОТАЕТ ((( */}
        {/* <NavLink
          className={s.titleLink}
          to="/"
          end
          className={({ isActive }) => (isActive ? css.active : css.titleLink)}
        >
          Home
        </NavLink> */}
        <Suspense fallback={<Loader />}>
          <NavLink className={s.titleLink} to="/movies">
            Movies
          </NavLink>
        </Suspense>
      </nav>
      <Outlet />
    </div>
  );
};
