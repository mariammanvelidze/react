import { ChangeEvent, RefObject, useCallback } from 'react';
import SearchInput from './components/SearchInput';

function App() {
  const onChangeCallback = useCallback(
    (
      e: RefObject<ChangeEvent<HTMLInputElement> | null>,
      debouncedValue: string
    ) => {
      console.log(e, debouncedValue);
    },
    []
  );

  return <SearchInput value={'word'} onChange={onChangeCallback} />;
}

export default App;
