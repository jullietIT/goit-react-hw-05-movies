import { getCastsMovies } from 'ApiServis';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import s from './MovieCredits.module.css';
import PropTypes from 'prop-types';

const MovieCredits = () => {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);
  const castPicture = {
    base_url: 'https://image.tmdb.org/t/p/',
    size: 'w300',
  };

  useEffect(() => {
    getCastsMovies(id).then(res => setCasts(res.cast));
  }, [id]);
  return (
    <ul className={s.list}>
      {casts.map(({ name, id, profile_path }) => {
        if (profile_path === null) {
          return (
            <li className={s.item} key={id}>
              <img
                alt={name}
                height={450}
                width={300}
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              />
              <p>{name}</p>
            </li>
          );
        }
        return (
          <li className={s.item} key={id}>
            <img
              alt=""
              src={`${castPicture.base_url}${castPicture.size}${profile_path}`}
            />
            <p className={s.text}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

MovieCredits.propTypes = {
  casts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default MovieCredits;
