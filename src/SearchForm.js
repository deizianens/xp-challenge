import React, { useState } from 'react';
import './styles/SearchForm.scss';

function SearchForm() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <form>
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
