import {UseFormSubmit, useFormSubmit} from './use-form-submit';
import {UseInput, useInput} from './use-input';

interface UseFormComponent {
  link: UseInput;
  handleSubmit: UseFormSubmit['handleSubmit'];
}

export function useFormComponent(): UseFormComponent {
  const link = useInput();
  const {handleSubmit} = useFormSubmit({link});

  return {
    link,
    handleSubmit,
  };
}
