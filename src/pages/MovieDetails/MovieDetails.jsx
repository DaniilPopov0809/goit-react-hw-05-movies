import { Suspense } from 'react';
import { toast } from 'react-toastify';
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Loader from 'components/Loader/Loader';
import { getFilmDetailsAPI } from '../../utils/API';
import { LoaderWrapper } from '../../components/Layout/Layout.styled';
import {
  CardSection,
  BackLink,
  InfoWrapper,
  DeteilsWrapper,
  Image,
  Description,
  Title,
  SubTitle,
  AdditionalSection,
  AdditionalLink,
  AdditionalList,
} from './MovieDetails.styled';



const IMGPATH = 'https://image.tmdb.org/t/p/original';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [genres, setGenres] = useState('');

  const location = useLocation();
  const backLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      try {
        const data = await getFilmDetailsAPI(movieId);

        setMovieDetails(data);
        console.log(data);
        setGenres(
          data.genres.reduce((acc, value, index, array) => {
            if (index !== array.length - 1) {
              acc += `${value.name}/`;
            }
            if (index === array.length - 1) {
              acc += `${value.name}`;
            }
            return acc;
          }, '')
        );
      } catch {
        toast.error('Oops, something went wrong!');
      } finally {
        setIsLoading(false);
      }
    };
    getMovieDetails();
  }, [movieId, genres.length]);

  const { poster_path, title, vote_average, overview } = movieDetails;

  return (
    <>
      <CardSection>
      <BackLink to={backLocationRef.current}>
        <MdOutlineArrowBackIos size={12} />
        Go Back
      </BackLink>
      {isLoading && Loader}

      <DeteilsWrapper>
        <Image src={`${IMGPATH}${poster_path}`} alt={title} width={350} />
        <InfoWrapper>
          <Title>{title}</Title>
          <Description>
            User score: {Math.round(vote_average * 10)}%
          </Description>
          <SubTitle>Overview</SubTitle>
          <Description>{overview}</Description>
          <SubTitle>Genres</SubTitle>
          {<Description>{genres}</Description>}
        </InfoWrapper>
      </DeteilsWrapper>
      </CardSection>

      <AdditionalSection>
      
      <Title>Additional information</Title>
      <AdditionalList>
        <li>
          <AdditionalLink to="cast" state={{ from: location }}>
            Cast
          </AdditionalLink>
        </li>
        <li>
          <AdditionalLink to="reviews" state={{ from: location }}>
            Reviews
          </AdditionalLink>
        </li>
      </AdditionalList>
      </AdditionalSection>
      <Suspense
        fallback={
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        }
      >
        <Outlet />
      </Suspense>
      
    </>
  );
};

export default MovieDetails;
