import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { getTrendingFilmAPI } from '../../utils/API';
import { Section, TitleWrap, Button } from './Home.styled';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendFilms, setTrendFilms] = useState([]);
  const [today, setToday] = useState(true);

  useEffect(() => {
    const getTrendFilm = async () => {
      
      let currentTrendFilms;
      try {
        if (today) {
          currentTrendFilms = await getTrendingFilmAPI('day');
        }
        if (!today) {
          currentTrendFilms = await getTrendingFilmAPI('week');
        }

        setTrendFilms(currentTrendFilms.results);
      } catch {
        toast.error('Oops, something went wrong!');
      } finally {
      }
    };  

    getTrendFilm();
  }, [today]);

  const handleClick = () => {
    setToday(!today);
  };

  return (
    <Section>
      <TitleWrap>
        <Button type="button" autoFocus onClick={handleClick}>
          TRENDING TODAY
        </Button>
        <Button type="button" onClick={handleClick}>
          TRENDING FOR WEEK
        </Button>
      </TitleWrap>
      <MoviesList trendFilms={trendFilms} />
    </Section>
  );
};

export default Home;
