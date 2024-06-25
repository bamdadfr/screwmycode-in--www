import {FormEvent, useCallback} from 'react';
import {useRouter} from 'next/router';
import {validateForm} from '../utils/validate-form';
import {UseInput} from './use-input';

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

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    const {isValid, path} = await validateForm(link.value);

    if (!isValid) {
      return link.resetValue();
    }

    await router.push(path);
  }, [link, router]);

  return {
    handleSubmit,
  };
}
