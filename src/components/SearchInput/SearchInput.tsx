import React, { useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import './styles.css';

function SearchInput({ defaultValue }: { defaultValue: string }) {
  const [searchedWord, setSearchedWord] = useState(defaultValue);

  const debouncedValue = useDebounce(searchedWord);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedWord(e.target.value);
  };

  return (
    <>
      <input
        type='text'
        defaultValue={defaultValue}
        placeholder='search'
        name='search'
        onChange={handleChange}
      />
      <div>{debouncedValue}</div>
    </>
  );
}

export default SearchInput;
