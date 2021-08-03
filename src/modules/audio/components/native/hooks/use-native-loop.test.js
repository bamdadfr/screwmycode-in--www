import { renderHook } from '@testing-library/react-hooks'
import { useNativeLoop } from './use-native-loop'
import { MOCK_AUDIO } from './use-native-component.test.mock'

afterEach (() => jest.resetAllMocks ())

describe ('useNativeLoop', () => {

    describe ('loop', () => {

        it ('should default to true', () => {

            renderHook (() => useNativeLoop (MOCK_AUDIO))

            expect (MOCK_AUDIO.loop).toBe (true)

        })

    })

})