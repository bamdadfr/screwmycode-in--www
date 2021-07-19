import { renderHook } from '@testing-library/react-hooks'
import { useAudioPlaybackRate } from './use-audio-playback-rate'

describe ('useAudioPlaybackRate', () => {

    describe ('playbackRate', () => {

        it ('should default to 1', () => {

            const ref = {
                'current': {
                    'playbackRate': undefined,
                },
            }

            renderHook (() => useAudioPlaybackRate (ref))

            expect (ref.current.playbackRate).toBe (1)

        })
    
    })

})