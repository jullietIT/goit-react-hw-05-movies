import { getSearchMovies } from '../../ApiServis';
import MovieList from '../../components/Endpoint/MoviesID/MoviesList';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SearchMovies } from '../../components/Endpoint/SearchMovies/SearchMovies';

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  const handleInput = async event => {
    return await getSearchMovies(event).then(response =>
      setMovies(response.results)
    );
  };

  return (
    <div>
      <SearchMovies onSubmit={handleInput}></SearchMovies>
      <MovieList movies={movies} />
      <Outlet />
    </div>
  );
};

export default Movies;
