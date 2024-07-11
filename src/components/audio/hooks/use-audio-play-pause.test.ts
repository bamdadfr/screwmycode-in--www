import {renderHook} from '@testing-library/react-hooks';

import {MOCK_AUDIO, SPY_AUDIO} from './use-audio-component.test.mock';
import {useAudioPlayPause} from './use-audio-play-pause';

afterEach(() => jest.resetAllMocks());

describe('useAudioPlayPause', () => {
  it('should default to not playing', () => {
    renderHook(() => useAudioPlayPause(MOCK_AUDIO));
    expect(SPY_AUDIO.play).toHaveBeenCalledTimes(0);
    expect(SPY_AUDIO.pause).toHaveBeenCalledTimes(1);
  });
});
