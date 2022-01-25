import {useInput} from './use-input';
import {useInputRefocus} from './use-input-refocus';
import {useFormSubmit} from './use-form-submit';

/**
 * Entry hook for form component
 *
 * @typedef {useInput} Link
 * @typedef {Function} HandleSubmit
 * @returns {{Link, HandleSubmit}} - Link and HandleSubmit
 */
export function useFormComponent() {
  const link = useInput();

  useInputRefocus(link.ref);

  const {handleSubmit} = useFormSubmit({link});

  return {
    link,
    handleSubmit,
  };
}
