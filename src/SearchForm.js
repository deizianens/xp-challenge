import React, { useState, useEffect } from 'react';
import './styles/SearchForm.scss';
import { getAlbum } from './services/spotifyService';

function SearchForm({ token, setMedia }) {
  const [search, setSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    getAlbum(token, search).then((response) => setMedia(response));
  }, [search]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label for='search' className='Search-label'>
          Busque por artistas, álbuns ou músicas
        </label>
        <input
          type='text'
          className='Search-input'
          name='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Comece a escrever...'
        />
      </form>
    </div>
  );
}

export default SearchForm;
