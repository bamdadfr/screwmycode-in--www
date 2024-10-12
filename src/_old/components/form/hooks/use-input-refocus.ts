import {RefObject, useEffect} from 'react';

/**
 * Hook to focus an input element when it is mounted
 * @see https://reactjs.org/blog/2020/08/10/react-v17-rc.html#potential-issues
 */
export function useInputRefocus(inputRef: RefObject<HTMLInputElement>): void {
  useEffect(() => {
    if (inputRef.current === null) {
      return;
    }

    const input = inputRef.current;
    if (!(input instanceof HTMLInputElement)) {
      return;
    }

    const listener = () => requestAnimationFrame(() => input.focus());
    listener();
    input.addEventListener('blur', listener);
    return () => input.removeEventListener('blur', listener);
  }, [inputRef]);
}
