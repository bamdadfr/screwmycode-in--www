import * as useSpeedComponent from './hooks/use-speed-component';

export const MOCK_STATE = () => {
  const response = {value: 1, onChange: jest.fn()};
  jest.spyOn(useSpeedComponent, 'useSpeedComponent')
    .mockReturnValue(response);

  return response;
};
