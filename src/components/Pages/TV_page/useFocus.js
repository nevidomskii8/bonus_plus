import { useEffect } from 'react';

export const useInitialfocus = (ref) => {
    useEffect(() => {
        ref.current.children[0].focus();

    }, [ref])
}