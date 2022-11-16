import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/Movies/MoviesDetails.js'));
const Cast = lazy(() => import('../components/Endpoint/Credits/MovieCredits'));
const Reviews = lazy(() =>
  import('../components/Endpoint/Rewiews/MovieReviews')
);
// const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
