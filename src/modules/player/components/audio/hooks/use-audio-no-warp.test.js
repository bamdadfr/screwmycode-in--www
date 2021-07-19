import { renderHook } from '@testing-library/react-hooks'
import { useAudioNoWarp } from './use-audio-no-warp'

describe ('useAudioNoWarp', () => {

    describe ('mozPreservesPitch', () => {

        it ('should default to false', () => {

            const ref = {
                'current': {
                    'mozPreservesPitch': undefined,
                },
            }

            renderHook (() => useAudioNoWarp (ref))

            expect (ref.current.mozPreservesPitch).toBe (false)

        })

    })

})