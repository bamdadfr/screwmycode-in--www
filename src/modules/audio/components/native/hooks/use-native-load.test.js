import { renderHook } from '@testing-library/react-hooks'
import { useNativeLoad } from './use-native-load'
import { MOCK_AUDIO, MOCK_URL } from './use-native-component.mock'

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

                const CANPLAY_ADD = MOCK_AUDIO.addEventListener.mock.calls[0]

                expect (CANPLAY_ADD[0]).toBe ('canplay')

                expect (typeof CANPLAY_ADD[1]).toBe ('function')

            })

            it ('should remove on unmount', () => {

                const { unmount } = renderHook (() => useNativeLoad (MOCK_AUDIO, MOCK_URL))

                unmount ()

                const CANPLAY_REMOVE = MOCK_AUDIO.removeEventListener.mock.calls[0]

                expect (CANPLAY_REMOVE[0]).toBe ('canplay')

                expect (typeof CANPLAY_REMOVE[1]).toBe ('function')

            })

        })

        describe ('loadedmetadata', () => {

            it ('should add on mount', () => {

                renderHook (() => useNativeLoad (MOCK_AUDIO, MOCK_URL))

                const LOADEDMETADATA_ADD = MOCK_AUDIO.addEventListener.mock.calls[1]

                expect (LOADEDMETADATA_ADD[0]).toBe ('loadedmetadata')

                expect (typeof LOADEDMETADATA_ADD[1]).toBe ('function')

            })

            it ('should remove on unmount', () => {

                const { unmount } = renderHook (() => useNativeLoad (MOCK_AUDIO, MOCK_URL))

                unmount ()

                const LOADEDMETADATA_REMOVE = MOCK_AUDIO.removeEventListener.mock.calls[1]

                expect (LOADEDMETADATA_REMOVE[0]).toBe ('loadedmetadata')

                expect (typeof LOADEDMETADATA_REMOVE[1]).toBe ('function')

            })
        
        })

    })

})