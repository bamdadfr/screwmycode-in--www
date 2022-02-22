import {renderHook} from '@testing-library/react-hooks';
import {useAudioSeek} from './use-audio-seek';
import {MOCK_AUDIO} from './use-audio-component.test.mock';

afterEach(() => jest.resetAllMocks());

describe('useAudioSeek', () => {
  describe('currentTime', () => {
    it('should default to 0', () => {
      renderHook(() => useAudioSeek(MOCK_AUDIO));
      expect(MOCK_AUDIO.currentTime).toBe(0);
    });
  });
});
