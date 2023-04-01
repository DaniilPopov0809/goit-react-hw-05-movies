import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import { LoaderWrapper } from '../Layout/Layout.styled';
import { getReviewsFilmAPI } from 'utils/API';
import {
  List,
  Item,
  Title,
  Description,
  Image,
  ItemWrap,
  Date,
  Message,
} from './Reviews.styled';
import NotFoundAvatar from '../../image/not_found_avatar.png';

const Reviews = () => {
  const { movieId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      setIsLoading(true);
      try {
        const data = await getReviewsFilmAPI(movieId);
        setReviews(data.results);
      } catch {
        toast.error('Oops, something went wrong!');
      } finally {
        setIsLoading(false);
      }
    };

    getReviews();
  }, [movieId]);

  const getDate = str => {
    return `${str.slice(0, 10)} ${str.slice(11, 16)}`;
  };

  const checkAvatar = avatar => {
    let path = '';
    if (avatar.avatar_path) {
      path = avatar.avatar_path.slice(1);
    }

    if (!avatar.avatar_path || avatar.avatar_path.length < 40) {
      path = NotFoundAvatar;
    }
    return path;
  };

  return (
    <>
      {isLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {!isLoading && reviews.length === 0 ? (
        <Message>We don't reviews for this movie...</Message>
      ) : (
        <List>
          {reviews.map(
            ({ author, content, id, author_details, updated_at }) => {
              const getdDate = getDate(updated_at);
              const pathAvatar = checkAvatar(author_details);
              return (
                <Item key={id}>
                  <Image src={pathAvatar} alt={author_details.username} />
                  <ItemWrap>
                    <Title>{author}</Title>
                    <Date>{getdDate}</Date>
                    <Description>{content}</Description>
                  </ItemWrap>
                </Item>
              );
            }
          )}
        </List>
      )}
    </>
  );
};

export default Reviews;
