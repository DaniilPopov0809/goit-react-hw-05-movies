import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getSearchFilmAPI } from 'utils/API';
import Loader from 'components/Loader/Loader';
import Searchbar from 'components/Searchbar/Searchbar';
import { Link } from 'react-router-dom';
import { LoaderWrapper } from 'components/Layout/Layout.styled';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);

  const location = useLocation();
  console.log('movies', location);

  const onSubmit = searchValue => {
    setSearchMovie(searchValue);
  };

  useEffect(() => {
    const getSearchFilm = async () => {
      setIsLoading(true);
      try {
        const data = await getSearchFilmAPI(searchMovie);
        setFoundMovies(data.results);
      } catch {
        toast.error('Oops, something went wrong!');
      } finally {
        setIsLoading(false);
      }
    };

    if (searchMovie) {
      getSearchFilm();
    }
  }, [searchMovie]);

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {isLoading && <LoaderWrapper><Loader /></LoaderWrapper>}
      <ul>
        {foundMovies.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link state={{ from: location }} to={`/movies/${id}`}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
      
    </>
  );
};

export default Movies;
