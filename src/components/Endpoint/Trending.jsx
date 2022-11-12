// import { getTrendigs } from '../../ApiServis';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Trending = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <p>{title}</p>
          </Link>
        </li>
      ))}
    </div>
  );
};

Trending.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Trending;
