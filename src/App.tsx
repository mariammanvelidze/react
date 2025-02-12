import { ChangeEvent, RefObject } from 'react';
import SearchInput from './components/SearchInput';

function App() {
  const handleChange = (
    e: RefObject<ChangeEvent<HTMLInputElement> | null>,
    debouncedValue: string
  ) => {
    console.log(e, debouncedValue);
  };

  return <SearchInput value={'word'} onChange={handleChange} />;
}

export default App;
