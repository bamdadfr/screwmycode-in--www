import {renderHook} from '@testing-library/react-hooks';
import {useAudioLoop} from './use-audio-loop';
import {MOCK_AUDIO} from './use-audio-component.test.mock';

afterEach(() => jest.resetAllMocks());

describe('useAudioLoop', () => {
  describe('loop', () => {
    it('should default to true', () => {
      renderHook(() => useAudioLoop(MOCK_AUDIO));
      expect(MOCK_AUDIO.loop).toBe(true);
    });
  });
});
