import { renderHook } from '@testing-library/react-hooks'
import { useNativeNoWarp } from './use-native-no-warp'

describe ('useAudioNoWarp', () => {

    describe ('mozPreservesPitch', () => {

        it ('should default to false', () => {

            const ref = {
                'current': {
                    'mozPreservesPitch': undefined,
                },
            }

            renderHook (() => useNativeNoWarp (ref))

            expect (ref.current.mozPreservesPitch).toBe (false)

        })

    })

})