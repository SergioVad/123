import { useCallback, useEffect, useRef } from 'react';

export function useDebounce(callback, delay = 1000) {
    const timer = useRef();
    useEffect(() => {
        return () => {
            clearInterval(timer.current);
        };
    }, []);
    return useCallback(
        (...args) => {
            clearTimeout(timer.current);
            timer.current = setTimeout(() => {
                callback(...args);
            }, delay);
            // return () => clearTimeout(timer.current);
        },
        [callback, delay],
    );
}
