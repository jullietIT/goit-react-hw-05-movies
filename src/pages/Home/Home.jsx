// import { Link } from 'react-router-dom';
import s from './Home.module.css';
import PropTypes from 'prop-types';
import MovieList from '../../components/MoviesList/MoviesList';

const { getTrendigs } = require('ApiServis');
const { useState, useEffect } = require('react');
// const homePicture = {
//   base_url: 'https://image.tmdb.org/t/p/',
//   size: 'w300',
// };

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendigs().then(response => {
      setTrendingMovies(response.results);
    });
  }, []);

  return (
    <main className={s.main}>
      <p className={s.title}>TRENDING TODAY</p>
      {/* <MovieList movies={trendingMovies} />    Стандартний патерн !!trendingMovies.length &&   якщо є фільми, то ми їх рендеримо*/}
      {!!trendingMovies.length && <MovieList movies={trendingMovies} />}
      {/* <ul className={s.list}>
        {trendingMovies.map(({ id, title, poster_path, vote_average }) => (
          <li className={s.item} key={id}>
            <Link className={s.NavLink} to={`/movies/${id}`}>
              <div className={s.wrap}>
                <img
                  className={s.img}
                  alt={title}
                  src={`${homePicture.base_url}${homePicture.size}${poster_path}`}
                />
              </div>
              <div>
                <h3 className={s.titleName}>{title}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul> */}
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
