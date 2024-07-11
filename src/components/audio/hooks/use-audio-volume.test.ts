import {renderHook} from '@testing-library/react-hooks';

import {MOCK_AUDIO, SPY_AUDIO} from './use-audio-component.test.mock';
import {useAudioVolume} from './use-audio-volume';

afterEach(() => jest.resetAllMocks());

describe('useAudioVolume', () => {
  describe('volume', () => {
    it('should default to 1', () => {
      renderHook(() => useAudioVolume(MOCK_AUDIO));
      expect(MOCK_AUDIO.volume).toBe(0.7);
    });
  });

  describe('events', () => {
    it('should handle 1 event', () => {
      expect(SPY_AUDIO.addEventListener).toHaveBeenCalledTimes(0);
      expect(SPY_AUDIO.removeEventListener).toHaveBeenCalledTimes(0);

      const {unmount} = renderHook(() => useAudioVolume(MOCK_AUDIO));
      expect(SPY_AUDIO.addEventListener).toHaveBeenCalledTimes(1);
      expect(SPY_AUDIO.removeEventListener).toHaveBeenCalledTimes(0);

      unmount();
      expect(SPY_AUDIO.removeEventListener).toHaveBeenCalledTimes(1);
    });
  });
});
