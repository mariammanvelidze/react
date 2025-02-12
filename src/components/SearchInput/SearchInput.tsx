import { ChangeEvent, RefObject, useEffect, useRef, useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import './styles.css';
import { usePrevious } from '../../hooks/usePrevious';

interface ISearchInput {
  value: string;
  onChange: (
    e: RefObject<ChangeEvent<HTMLInputElement> | null>,
    debouncedValue: string
  ) => void;
}

function SearchInput({ value, onChange }: Readonly<ISearchInput>) {
  const [searchedWord, setSearchedWord] = useState(value);
  const inputEvent = useRef<React.ChangeEvent<HTMLInputElement>>(null);

  const debouncedValue = useDebounce(searchedWord);
  const prevDebouncedValue = usePrevious(debouncedValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedWord(e.target.value);
    inputEvent.current = e;
  };

  useEffect(() => {
    if (inputEvent.current && prevDebouncedValue !== debouncedValue) {
      onChange(inputEvent, debouncedValue);
    }
  }, [debouncedValue, onChange, prevDebouncedValue]);

  return (
    <>
      <input
        type='text'
        defaultValue={value}
        placeholder='search'
        name='search'
        onChange={(e) => handleChange(e)}
      />

      <div>{debouncedValue}</div>
    </>
  );
}

export default SearchInput;
