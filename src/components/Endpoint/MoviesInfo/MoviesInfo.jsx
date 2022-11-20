import { getDetailsMovies } from 'ApiServis';
import { Link } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import s from './MoviesInfo.module.css';
import PropTypes from 'prop-types';
import { BsCaretLeftSquareFill } from 'react-icons/bs';

const MovieInfo = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  // const navigate = useNavigate();

  const moviePicture = {
    base_url: 'https://image.tmdb.org/t/p/',
    size: 'w500',
    picture: movie.poster_path,
  };

  const location = useLocation();
  const goBackLink = location.state?.from ?? `/Movies/${id}`;
  // const goBackLink = (navigate = () => -1);

  useEffect(() => {
    getDetailsMovies(id).then(res => setMovie(res));
  }, [id]);

  return (
    <div className={s.wrapper}>
      <Link className={s.goBackLink} to={goBackLink}>
        {/* <Link className={s.goBackLink} onClick={goBackLink}> */}
        <BsCaretLeftSquareFill size="24px" className={s.goBackIcon} />
        GO BACK
      </Link>
      {MovieInfo && (
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
                {movie.budget}
              </div>
              <div className={s.item}>
                <h3>Vote average : </h3>
                {movie.vote_average}
              </div>
            </ul>
          </div>
        </div>
      )}
      <Link className={s.link} to="cast" state={location.state}>
        Cast
      </Link>
      <Link className={s.link} to="reviews" state={location.state}>
        Reviews
      </Link>

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
