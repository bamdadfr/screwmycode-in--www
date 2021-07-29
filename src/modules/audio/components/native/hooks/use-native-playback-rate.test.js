import { renderHook } from '@testing-library/react-hooks'
import { useNativePlaybackRate } from './use-native-playback-rate'

describe ('useAudioPlaybackRate', () => {

    describe ('playbackRate', () => {

        it ('should default to 1', () => {

            const ref = {
                'current': {
                    'playbackRate': undefined,
                },
            }

            renderHook (() => useNativePlaybackRate (ref))

            expect (ref.current.playbackRate).toBe (1)

        })
    
    })

})