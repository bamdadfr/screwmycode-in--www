import {renderHook} from '@testing-library/react-hooks';
import {useNativeSeek} from './use-native-seek';
import {MOCK_AUDIO} from './use-native-component.test.mock';

afterEach(() => jest.resetAllMocks());

describe('useNativeSeek', () => {
  describe('currentTime', () => {
    it('should default to 0', () => {
      renderHook(() => useNativeSeek(MOCK_AUDIO));
      expect(MOCK_AUDIO.currentTime).toBe(0);
    });
  });
});
