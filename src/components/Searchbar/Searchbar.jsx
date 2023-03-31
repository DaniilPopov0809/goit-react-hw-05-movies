import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import {Form, Input, Button} from './Searchbar.styled'

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
        <Input
          type="text"
          name="inputSearch"
          placeholder="Enter the movie"
          defaultValue={searchQuery}
          autoFocus
        />
        <Button type="submit">Search</Button>
      </Form>
    </>
  );
};

export default Searchbar;
