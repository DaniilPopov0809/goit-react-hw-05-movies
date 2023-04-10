import { List, Item, ItemLink, Description, Image, Year, Grade, Wrapper } from './MoviesList.styled';
import PropTypes from 'prop-types';

const IMGPATH = 'https://image.tmdb.org/t/p/original';

const MoviesList = ({ trendFilms }) => {
  return (
    <List>
      {trendFilms.map(({ id, title, poster_path, release_date, vote_average }) => {
        return (
          <Item key={id}>
            <ItemLink to={`movies/${id}`}>
              <Image src={`${IMGPATH}/${poster_path}`} alt={`${title}`} />
              <Wrapper>
              <Description>{title}</Description>
              <Year>{`${release_date.slice(0, 4)}`}</Year>
              </Wrapper>
              <Grade>{`${vote_average.toFixed(2)}`}</Grade>
            </ItemLink>
            
          </Item>
        );
      })}
    </List>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  trendFilms: PropTypes.array,
};
