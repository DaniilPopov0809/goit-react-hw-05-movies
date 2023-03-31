import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import { LoaderWrapper } from '../Layout/Layout.styled';
import { getReviewsFilmAPI } from 'utils/API';
import { List, Item, Title, Description } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      setIsLoading(true);
      try {
        const data = await getReviewsFilmAPI(movieId);
        console.log(
          '🚀 ~ file: Reviews.jsx:19 ~ getReviews ~ data:',
          data.results
        );

        setReviews(data.results);
      } catch {
        toast.error('Oops, something went wrong!');
      } finally {
        setIsLoading(false);
      }
    };

    getReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {!isLoading && reviews.length === 0 ? (
        <p>We don't reviews for this movie</p>
      ) : (
        <List>
          {reviews.map(({ author, content, id }) => {
            return (
              <Item key={id}>
                <Title>
                  Author: {author}
                </Title>
                <Description>{content}</Description>
              </Item>
            );
          })}
        </List>
      )}
    </>
  );
};

export default Reviews;
