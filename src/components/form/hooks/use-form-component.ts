import {UseInput, useInput} from './use-input';
import {useInputRefocus} from './use-input-refocus';
import {UseFormSubmit, useFormSubmit} from './use-form-submit';

interface UseFormComponent {
  link: UseInput;
  handleSubmit: UseFormSubmit['handleSubmit'];
}

export function useFormComponent(): UseFormComponent {
  const link = useInput();

  useInputRefocus(link.ref);

  const {handleSubmit} = useFormSubmit({link});

  return {
    link,
    handleSubmit,
  };
}
