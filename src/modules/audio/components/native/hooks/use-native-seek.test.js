import { renderHook } from '@testing-library/react-hooks'
import { MOCK_AUDIO } from './use-native-component.mock'
import { useNativeSeek } from './use-native-seek'

afterEach (() => jest.resetAllMocks ())

describe ('useNativeSeek', () => {

    describe ('currentTime', () => {

        it ('should default to 0', () => {

            expect (MOCK_AUDIO.currentTime).toBe (undefined)

            renderHook (() => useNativeSeek (MOCK_AUDIO))

            expect (MOCK_AUDIO.currentTime).toBe (0)

        })
    
    })

})