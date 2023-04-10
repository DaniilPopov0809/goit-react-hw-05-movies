import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsFilmAPI } from 'utils/API';
import { LoaderWrapper } from '../Layout/Layout.styled';
import notFoundImg from '../../image/not_found_img.png';
import Loader from 'components/Loader/Loader';
import { List, Item, Image, Name, Character, Wrapper } from './Cast.styled';
import { Message } from 'components/Reviews/Reviews.styled';

const IMGPATH = 'https://image.tmdb.org/t/p/original';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getCast = async () => {
      setIsLoading(true);
      try {
        const data = await getCreditsFilmAPI(movieId);
        setCast(data.cast);
      } catch {
        toast.error('Oops, something went wrong!');
      } finally {
        setIsLoading(false);
      }
    };

    getCast();
  }, [movieId]);

  return (
    <>
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {!isLoading && cast.length === 0 ? (
        <Message>We don't characters for this movie...</Message>
      ) : (
        <List>
          {cast.map(({ name, profile_path, character, id }) => {
            return (
              <Item key={id}>
                <Image
                  src={
                    profile_path
                      ? `${IMGPATH}${profile_path}`
                      : `${notFoundImg}`
                  }
                  alt={character}
                />
                <Wrapper>
                <Name>{name}</Name>
                <Character>
                  Character:
                  {character}
                </Character>
                </Wrapper>
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
};

export default Cast;
