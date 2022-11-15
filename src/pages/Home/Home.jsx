import { NavLink } from 'react-router-dom';
import s from './Home.module.css';
import PropTypes from 'prop-types';

const { getTrendigs } = require('ApiServis');
const { useState, useEffect } = require('react');

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  const homePicture = {
    base_url: 'https://image.tmdb.org/t/p/',
    size: 'w300',
  };
  useEffect(() => {
    getTrendigs().then(response => {
      setTrendingMovies(response.results);
    });
  }, []);

  return (
    <main className={s.HomeMain}>
      <p className={s.HomeTitle}>Trending today</p>
      <ul className={s.HomeList}>
        {trendingMovies.map(({ id, title, poster_path, vote_average }) => (
          <li className={s.Homeli} key={id}>
            <NavLink className={s.HomeNavLink} to={`/movies/${id}`}>
              <div className={s.wrap}>
                {' '}
                <img
                  className={s.wrap}
                  alt={title}
                  src={`${homePicture.base_url}${homePicture.size}${poster_path}`}
                />
              </div>
              <div>
                {' '}
                <h3 className={s.Title}>{title}</h3>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};

Home.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.string,
    })
  ),
};
export default Home;
