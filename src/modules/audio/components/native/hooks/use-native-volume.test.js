import { renderHook } from '@testing-library/react-hooks'
import { MOCK_AUDIO } from './use-native-component.mock'
import { useNativeVolume } from './use-native-volume'

afterEach (() => jest.resetAllMocks ())

describe ('useNativeVolume', () => {

    describe ('volume', () => {

        it ('should default to 1', () => {

            renderHook (() => useNativeVolume (MOCK_AUDIO))

            expect (MOCK_AUDIO.volume).toBe (0.7)
        
        })
    
    })

    describe ('events', () => {

        it ('should handle 1 event', () => {

            expect (MOCK_AUDIO.addEventListener).toHaveBeenCalledTimes (0)

            expect (MOCK_AUDIO.removeEventListener).toHaveBeenCalledTimes (0)

            const { unmount } = renderHook (() => useNativeVolume (MOCK_AUDIO))

            expect (MOCK_AUDIO.addEventListener).toHaveBeenCalledTimes (1)

            expect (MOCK_AUDIO.removeEventListener).toHaveBeenCalledTimes (0)

            unmount ()

            expect (MOCK_AUDIO.removeEventListener).toHaveBeenCalledTimes (1)
        
        })

    })

})
