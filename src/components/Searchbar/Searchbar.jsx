import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { Form, Input, Button, FormWrap, Lupa } from './Searchbar.styled';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const handleSumbitForm = event => {
    event.preventDefault();
    const query = event.target.inputSearch.value;

    if (query.trim() === '') {
      toast.info('Enter search image or photo!');
      return;
    }
    setSearchParams(query ? { query } : {});
    onSubmit(query);
  };

  useEffect(() => {
    if (searchQuery) {
      onSubmit(searchQuery);
    }
  });

  return (
    <>
      <Form onSubmit={handleSumbitForm}>
        <FormWrap>
          <Input
            type="text"
            name="inputSearch"
            placeholder="Enter the movie"
            defaultValue={searchQuery}
            autoFocus
          />
          <Button type="submit">
            <Lupa style={{ width: 20, height: 20 }} />
          </Button>
        </FormWrap>
      </Form>
    </>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
