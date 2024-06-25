import {FormEvent, useCallback} from 'react';
import {useRouter} from 'next/router';
import {validateForm} from '../utils/validate-form';
import {UseInput} from './use-input';
import {getClientToken} from './get-client-token';
import {queryTokenApi} from './query-token-api';

interface UseFormSubmitOptions {
  link: UseInput;
}

export interface UseFormSubmit {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

/**
 * Hook to handle form submission
 * @param root0
 * @param root0.link
 */
export function useFormSubmit({link}: UseFormSubmitOptions): UseFormSubmit {
  const router = useRouter();

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const {isValid, path} = await validateForm(link.value);
      const token = await getClientToken();
      const response = await queryTokenApi(token);
      const {isValid: isTokenValid} = await response.json();

      if (!isValid || !isTokenValid) {
        return link.resetValue();
      }

      await router.push(path);
    },
    [link, router],
  );

  return {
    handleSubmit,
  };
}
