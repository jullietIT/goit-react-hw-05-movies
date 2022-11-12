import { Trending } from '../components/Endpoint/Trending';
import { useRequest } from '../components/hooks/useRequest';
import { getTrendigs } from '../ApiServis';
import { Loader } from '../components/Loader';

export const Home = () => {
  const [movies, error, isLoading] = useRequest(getTrendigs);

  return (
    <main>
      <h1>Trending today</h1>
      <Loader boolean={isLoading} />
      {error && <p>{error}</p>}

      {movies && <Trending movies={movies} />}
    </main>
  );
};
