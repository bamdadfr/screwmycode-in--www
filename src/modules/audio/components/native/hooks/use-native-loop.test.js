import { renderHook } from '@testing-library/react-hooks'
import { useNativeLoop } from './use-native-loop'

describe ('useAudioLoop', () => {

    describe ('loop', () => {

        it ('should default to true', () => {

            const ref = {
                'current': {
                    'loop': undefined,
                },
            }

            renderHook (() => useNativeLoop (ref))

            expect (ref.current.loop).toBe (true)

        })

    })

})