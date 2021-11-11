import { renderHook } from '@testing-library/react-hooks';
import { useNativePitch } from './use-native-pitch';
import { MOCK_AUDIO } from './use-native-component.test.mock';

afterEach (() => jest.resetAllMocks ());

describe ('useNativePitch', () => {
  describe ('mozPreservesPitch', () => {
    it ('should default to false', () => {
      renderHook (() => useNativePitch (MOCK_AUDIO));
      expect (MOCK_AUDIO.mozPreservesPitch).toBe (false);
    });
  });
});
