import { getSearchMovies } from '../../ApiServis';
import MovieList from '../../components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchMovies } from '../../components/SearchMovies/SearchMovies';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query'); // за допомогою цього методу (searchParams.get) витягнули назву " query "

    if (!query) return; //якщо нічого не має, повертаємо

    getSearchMovies(query).then(response => setMovies(response.results));
  }, [searchParams]);

  const handleInput = query => {
    setSearchParams({ query }); //виконується метод і у query записується значеня пошуку (у строку пошуку у браузурі)
  };

  return (
    <div>
      <SearchMovies onSubmit={handleInput}></SearchMovies>
      {/* <MovieList movies={trendingMovies} />    Стандартний патерн !!movies.length &&   якщо є фільми, то ми їх рендеримо*/}
      {!!movies.length && <MovieList movies={movies} />}
    </div>
  );
};

export default Movies;
