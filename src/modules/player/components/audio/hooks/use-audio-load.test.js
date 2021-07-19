import { renderHook } from '@testing-library/react-hooks'
import { useAudioLoad } from './use-audio-load'

describe ('useAudioLoad', () => {

    describe ('autoplay', () => {

        it ('should default to false', () => {

            const ref = {
                'current': {
                    'addEventListener': jest.fn (),
                },
            }

            const { result } = renderHook (() => useAudioLoad (ref))

            expect (result.current.autoplay).toBe (false)
        
        })
    
    })

    describe ('src', () => {

        it ('should default to url parameter', () => {

            const ref = {
                'current': {
                    'addEventListener': jest.fn (),
                },
            }

            const url = 'http://localhost:3000/my-file.mp3'

            expect (ref.current.src).toBe (undefined)

            renderHook (() => useAudioLoad (ref, url))

            expect (ref.current.src).toBe (url)

        })

    })

    describe ('canplay event listener', () => {

        it ('should be added on mount', () => {

            const ref = {
                'current': {
                    'addEventListener': jest.fn (),
                },
            }

            expect (ref.current.addEventListener).toHaveBeenCalledTimes (0)

            renderHook (() => useAudioLoad (ref))

            expect (ref.current.addEventListener).toHaveBeenCalledTimes (1)
        
        })

        it ('should be removed on unmount', () => {

            const ref = {
                'current': {
                    'addEventListener': jest.fn (),
                    'removeEventListener': jest.fn (),
                },
            }

            expect (ref.current.removeEventListener).toHaveBeenCalledTimes (0)

            const { unmount } = renderHook (() => useAudioLoad (ref))

            unmount ()

            expect (ref.current.removeEventListener).toHaveBeenCalledTimes (1)

        })
    
    })

})