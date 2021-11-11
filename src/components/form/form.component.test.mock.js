import * as useFormComponent from './hooks/use-form-component';

export const MOCK_STATE = () => {
  const state = {
    link: {
      ref: null,
      value: '',
      onChange: jest.fn (),
      resetValue: jest.fn (),
    },
    handleSubmit: jest.fn ((e) => e.preventDefault ()),
  };

  jest
    .spyOn (useFormComponent, 'useFormComponent')
    .mockReturnValue (state);

  return state;
};
