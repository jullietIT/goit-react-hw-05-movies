import { Link, useLocation } from 'react-router-dom';

import s from './MoviesList.module.css';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  const moviesPicture = {
    base_url: 'https://image.tmdb.org/t/p/',
    size: 'w300',
    noimageURL:
      'https://www.pacificfoodmachinery.com.au/media/catalog/product/placeholder/default/no-product-image-400x400_8.png',
  };

  const location = useLocation();
  return (
    <main className={s.main}>
      <ul className={s.list}>
        {movies.map(({ id, title, poster_path, vote_average }) => {
          const poster = poster_path
            ? `${moviesPicture.base_url}${moviesPicture.size}${poster_path}`
            : moviesPicture.noimageURL;

          return (
            <li className={s.item} key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {/* Завдяки state={{ from: location }}>  ми переходимо на ту сторінку  з якої прийшли*/}
                <div>
                  <img className={s.img} alt={title} src={poster} />
                </div>
                <div className={s.wrap}>
                  <h3 className={s.title}>{title}</h3>
                  <p className={s.text}></p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

MovieList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
    })
  ),
};

export default MovieList;
