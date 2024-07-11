import {renderHook} from '@testing-library/react-hooks';

import {MOCK_AUDIO} from './use-audio-component.test.mock';
import {useAudioPlaybackRate} from './use-audio-playback-rate';

afterEach(() => jest.resetAllMocks());

describe('useAudioPlaybackRate', () => {
  describe('playbackRate', () => {
    it('should default to 1', () => {
      renderHook(() => useAudioPlaybackRate(MOCK_AUDIO));
      expect(MOCK_AUDIO.playbackRate).toBe(1);
    });
  });
});
