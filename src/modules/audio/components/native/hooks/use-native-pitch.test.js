import { renderHook } from '@testing-library/react-hooks'
import { useNativePitch } from './use-native-pitch'

describe ('useNativePitch', () => {

    describe ('mozPreservesPitch', () => {

        it ('should default to false', () => {

            const ref = {
                'current': {
                    'mozPreservesPitch': undefined,
                },
            }

            renderHook (() => useNativePitch (ref))

            expect (ref.current.mozPreservesPitch).toBe (false)

        })

    })

})