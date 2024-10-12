import * as useFormComponent from './hooks/use-form-component';

const state = {
  link: {
    ref: null,
    value: '',
    onChange: jest.fn(),
    resetValue: jest.fn(),
  },
  handleSubmit: jest.fn((e) => e.preventDefault()),
};

export const MOCK_STATE = (): typeof state => {
  jest
    .spyOn(useFormComponent, 'useFormComponent')
    .mockReturnValue(state);

  return state;
};
