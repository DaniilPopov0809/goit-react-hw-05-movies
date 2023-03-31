import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { getTrendingFilmAPI } from '../../utils/API';
import { Section, Title } from './Home.styled';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendFilms, setTrendFilms] = useState([]);

  useEffect(() => {
    const getTrendFilm = async () => {
      try {
        const currentTrendFilms = await getTrendingFilmAPI();
        setTrendFilms(currentTrendFilms.results);
      } catch {
        toast.error('Oops, something went wrong!');
      } finally {
      }
    };

    getTrendFilm();
  }, []);

  return (
    <Section>
      <Title>Trending today</Title>
      <MoviesList trendFilms={trendFilms} />
    </Section>
  );
};

export default Home;
