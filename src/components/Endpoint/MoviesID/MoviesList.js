import { Link, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import s from './MoviesList.module.css';
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
  const moviesPicture = {
    base_url: 'https://image.tmdb.org/t/p/',
    size: 'w300',
  };

  const location = useLocation();
  return (
    <main className={s.main}>
      <ul className={s.list}>
        {movies.map(({ id, title, poster_path, vote_average }) => {
          if (poster_path === null) {
            return (
              <li className={s.item} key={id}>
                <NavLink
                  className={s.NavLink}
                  to={`${id}`}
                  state={{ from: location }}
                >
                  <div>
                    {' '}
                    <img
                      className={s.img}
                      alt={title}
                      height={450}
                      width={300}
                      src="https://www.pacificfoodmachinery.com.au/media/catalog/product/placeholder/default/no-product-image-400x400_8.png"
                    />
                  </div>
                  <div className={s.wrap}>
                    <h3 className={s.title}>{title}</h3>
                  </div>
                </NavLink>
              </li>
            );
          }
          return (
            <li className={s.item} key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                <div>
                  <img
                    className={s.img}
                    alt={title}
                    src={`${moviesPicture.base_url}${moviesPicture.size}${poster_path}`}
                  />
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
    })
  ),
};

export default MovieList;
