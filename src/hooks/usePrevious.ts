import { useRef, useEffect } from 'react';

export function usePrevious(value: string) {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}
