import { renderHook } from '@testing-library/react-hooks'
import { useNativeLoad } from './use-native-load'
import { MOCK_AUDIO, MOCK_URL } from './use-native-component.test.mock'

afterEach (() => jest.resetAllMocks ())

describe ('useNativeLoad', () => {

    describe ('src', () => {

        it ('should default to url parameter', () => {

            expect (MOCK_AUDIO.src).toBe (undefined)

            renderHook (() => useNativeLoad (MOCK_AUDIO, MOCK_URL))

            expect (MOCK_AUDIO.src).toBe (MOCK_URL)

        })

    })

    describe ('events', () => {

        it ('should manage 2 events', () => {

            expect (MOCK_AUDIO.addEventListener).toHaveBeenCalledTimes (0)

            expect (MOCK_AUDIO.removeEventListener).toHaveBeenCalledTimes (0)

            const { unmount } = renderHook (() => useNativeLoad (MOCK_AUDIO, MOCK_URL))

            expect (MOCK_AUDIO.addEventListener).toHaveBeenCalledTimes (2)

            expect (MOCK_AUDIO.removeEventListener).toHaveBeenCalledTimes (2) // todo should be 0

            unmount ()

            expect (MOCK_AUDIO.removeEventListener).toHaveBeenCalledTimes (2)
        
        })

        describe ('canplay', () => {

            it ('should add on mount', () => {

                renderHook (() => useNativeLoad (MOCK_AUDIO, MOCK_URL))

                expect (MOCK_AUDIO.addEventListener.mock.calls[0][0]).toBe ('canplay')

                expect (typeof MOCK_AUDIO.addEventListener.mock.calls[0][1]).toBe ('function')

            })

            it ('should remove on unmount', () => {

                const { unmount } = renderHook (() => useNativeLoad (MOCK_AUDIO, MOCK_URL))

                unmount ()

                expect (MOCK_AUDIO.removeEventListener.mock.calls[0][0]).toBe ('canplay')

                expect (typeof MOCK_AUDIO.removeEventListener.mock.calls[0][1]).toBe ('function')

            })

        })

        describe ('loadedmetadata', () => {

            it ('should add on mount', () => {

                renderHook (() => useNativeLoad (MOCK_AUDIO, MOCK_URL))

                expect (MOCK_AUDIO.addEventListener.mock.calls[1][0]).toBe ('loadedmetadata')

                expect (typeof MOCK_AUDIO.addEventListener.mock.calls[1][1]).toBe ('function')

            })

            it ('should remove on unmount', () => {

                const { unmount } = renderHook (() => useNativeLoad (MOCK_AUDIO, MOCK_URL))

                unmount ()

                expect (MOCK_AUDIO.removeEventListener.mock.calls[1][0]).toBe ('loadedmetadata')

                expect (typeof MOCK_AUDIO.removeEventListener.mock.calls[1][1]).toBe ('function')

            })
        
        })

    })

})