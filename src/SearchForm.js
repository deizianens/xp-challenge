import React, { useState, useEffect } from 'react';
import './styles/SearchForm.scss';
import { getAlbum } from './services/spotifyService';

function SearchForm({ token, setMedia }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    getAlbum(search, token).then((response) => setMedia(response));
  }, [search]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className='Search-input'
          name='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchForm;
