import { useEffect } from 'react';

export const useInitialfocus = (ref) => {
  useEffect(() => {
    ref.current.focus();
  }, [ref]);
};
