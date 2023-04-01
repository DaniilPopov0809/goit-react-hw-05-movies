import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getSearchFilmAPI } from 'utils/API';
import Loader from 'components/Loader/Loader';
import Searchbar from 'components/Searchbar/Searchbar';
import { Message } from 'components/Reviews/Reviews.styled';
import { LoaderWrapper } from '../../components/Layout/Layout.styled';
import {
  List,
  Description,
  Image,
  Item,
  ItemLink,
} from '../../components/MoviesList/MoviesList.styled';
import notFoundPoster from '../../image/not_found_poster.png';

const IMGPATH = 'https://image.tmdb.org/t/p/original/';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [foundMovies, setFoundMovies] = useState([]);

  const location = useLocation();

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
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {foundMovies.length !== 0 && searchMovie && (
        <List>
          {foundMovies.map(({ title, poster_path, id }) => {
            return (
              <Item key={id}>
                <ItemLink state={{ from: location }} to={`/movies/${id}`}>
                  {
                    <Image
                      src={
                        poster_path
                          ? `${IMGPATH}${poster_path}`
                          : `${notFoundPoster}`
                      }
                      alt={title}
                    />
                  }
                  <Description>{title}</Description>
                </ItemLink>
              </Item>
            );
          })}
        </List>
      )}
      {foundMovies.length === 0 && searchMovie && !isLoading && (
        <Message>Nothing found according to your request!</Message>
      )}
    </>
  );
};

export default Movies;
