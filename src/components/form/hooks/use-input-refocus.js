import React, {useEffect} from 'react';

/**
 * Hook to focus an input element when it is mounted
 *
 * @see https://reactjs.org/blog/2020/08/10/react-v17-rc.html#potential-issues
 * @param {React.Ref} inputRef - The input element to focus
 */
export function useInputRefocus(inputRef) {
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
