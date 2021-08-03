import { renderHook } from '@testing-library/react-hooks'
import { useNativePlayPause } from './use-native-play-pause'
import { MOCK_AUDIO } from './use-native-component.test.mock'

afterEach (() => jest.resetAllMocks ())

describe ('useNativePlayPause', () => {

    it ('should default to not playing', () => {

        renderHook (() => useNativePlayPause (MOCK_AUDIO))

        expect (MOCK_AUDIO.play).toHaveBeenCalledTimes (0)

        expect (MOCK_AUDIO.pause).toHaveBeenCalledTimes (1)
    
    })

})