import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { validateForm } from '../utils/validate-form';

/**
 * Hook to handle form submission
 *
 * @param {object} options - Options
 * @param {object} options.link - Link to submit form to
 * @typedef {function(): undefined} HandleSubmit
 * @returns {{HandleSubmit}} - Form submit handler
 */
export function useFormSubmit ({ link }) {
  const router = useRouter ();

  const handleSubmit = useCallback (async (event) => {
    event.preventDefault ();

    const { isValid, path } = await validateForm (link.value);

    if (!isValid) {
      return link.resetValue ();
    }

    await router.push (path);
  }, [link, router]);

  return {
    handleSubmit,
  };
}
