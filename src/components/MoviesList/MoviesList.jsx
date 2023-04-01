import { List, Item, ItemLink, Description, Image } from './MoviesList.styled';
import PropTypes from 'prop-types';

const IMGPATH = 'https://image.tmdb.org/t/p/original';

const MoviesList = ({ trendFilms }) => {
  return (
    <List>
      {trendFilms.map(({ id, title, poster_path }) => {
        return (
          <Item key={id}>
            <ItemLink to={`movies/${id}`}>
              <Image src={`${IMGPATH}/${poster_path}`} alt={`${title}`} />
              <Description>{title}</Description>
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
