import { renderHook } from '@testing-library/react-hooks'
import { useNativePlaybackRate } from './use-native-playback-rate'
import { MOCK_AUDIO } from './use-native-component.test.mock'

afterEach (() => jest.resetAllMocks ())

describe ('useNativePlaybackRate', () => {

    describe ('playbackRate', () => {

        it ('should default to 1', () => {

            renderHook (() => useNativePlaybackRate (MOCK_AUDIO))

            expect (MOCK_AUDIO.playbackRate).toBe (1)

        })
    
    })

})