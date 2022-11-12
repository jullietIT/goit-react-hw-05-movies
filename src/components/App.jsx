import { Route, Routes } from 'react-router-dom';
import { Movies } from '../pages/Movies';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Container, Header, Link } from './App.styled.js';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home{' '}
          </Link>
          <Link to="/Movies">Movies</Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
