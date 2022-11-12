import { Wrapper, Input, Icon } from './SearchBox.styled.js';

import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

import React from 'react';

export function SearchMovies({ onSubmit }) {
  const [searchText, setSearchText] = useState('');
  const handleSetQuery = e => {
    setSearchText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const normaliseRequest = searchText.toLowerCase().trim();
    if (!normaliseRequest) {
      return toast('enter your request please!', {
        position: 'top-center',
        hideProgressBar: true,
      });
    }

    onSubmit(normaliseRequest);
    setSearchText('');
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleSetQuery}
          value={searchText}
          name="query"
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Що шукаємо ?"
          pattern="^[0-9a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Щоб щось знайти, введіть пошукове слово, що складається з букв,апострофа,тире, цифр и пробілу."
        />
        <button type="submit">
          <Icon />
        </button>
      </form>
    </Wrapper>
  );
}

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  // handleSubmit: PropTypes.func.isRequired,
};

export default SearchMovies;
