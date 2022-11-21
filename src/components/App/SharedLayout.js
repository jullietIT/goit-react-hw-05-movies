import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';

import { NavLink } from 'react-router-dom';
import s from './App.module.css';

export const SharedLayout = () => {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <nav className={s.nav}>
          <NavLink className={s.titleLink} to="/" end>
            Home
          </NavLink>

          <NavLink className={s.titleLink} to="/movies">
            Movies
          </NavLink>
        </nav>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
