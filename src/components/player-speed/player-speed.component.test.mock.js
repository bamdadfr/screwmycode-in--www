import * as usePlayerSpeedComponent from './hooks/use-player-speed-component';

export const MOCK_STATE = () => {
  const response = { value: 1, onChange: jest.fn () };
  jest.spyOn (usePlayerSpeedComponent, 'usePlayerSpeedComponent')
    .mockReturnValue (response);

  return response;
};
