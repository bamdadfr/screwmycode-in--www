import { renderHook } from '@testing-library/react-hooks'
import { useAudioLoop } from './use-audio-loop'

describe ('useAudioLoop', () => {

    describe ('loop', () => {

        it ('should default to true', () => {

            const ref = {
                'current': {
                    'loop': undefined,
                },
            }

            renderHook (() => useAudioLoop (ref))

            expect (ref.current.loop).toBe (true)

        })

    })

})