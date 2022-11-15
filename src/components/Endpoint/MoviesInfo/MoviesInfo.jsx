import { getDetailsMovies } from 'ApiServis';
import { NavLink } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import s from './MoviesInfo.module.css';
import PropTypes from 'prop-types';

const MovieInfo = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const moviePicture = {
    base_url: 'https://image.tmdb.org/t/p/',
    size: 'w500',
    picture: movie.poster_path,
  };

  const location = useLocation();
  const goBackLink = location.state?.from ?? `/Movies`;

  useEffect(() => {
    getDetailsMovies(id).then(res => setMovie(res));
  }, [id]);

  return (
    <div>
      <NavLink className={s.GoBackLink} to={goBackLink}>
        Go back
      </NavLink>
      <div className={s.wrap}>
        <div className={s.poster}>
          <img
            className={s.img}
            src={`${moviePicture.base_url}${moviePicture.size}${moviePicture.picture}`}
            alt=""
          />
        </div>
        <div className={s.info}>
          <h2>{movie.title}</h2>
          <ul>
            <div className={s.item}>
              <h3>Overview:</h3> {movie.overview}
            </div>
            <div className={s.item}>
              <h3>Budget: </h3>
              {movie.budget}$
            </div>
            <div className={s.item}>
              <h3>Vote average : </h3>
              {movie.vote_average}
            </div>
          </ul>
        </div>
      </div>
      <NavLink className={s.link} to="cast" state={location.state}>
        Cast
      </NavLink>
      <NavLink className={s.link} to="reviews" state={location.state}>
        Reviews
      </NavLink>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.string,
      budget: PropTypes.number,
    })
  ),
};

export default MovieInfo;
