import { renderHook } from '@testing-library/react-hooks'
import { useKeyboardToggle } from './use-keyboard-toggle'

describe ('useKeyboardToggle', () => {

    describe ('keypress event listener', () => {

        it ('should be added on mount', () => {

            // given
            const DOCUMENT_SPY = jest.spyOn (document, 'addEventListener')

            expect (DOCUMENT_SPY).toHaveBeenCalledTimes (0)

            // when
            renderHook (() => useKeyboardToggle ())

            // then
            expect (DOCUMENT_SPY).toHaveBeenCalled ()
        
        })

        it ('should be removed on unmount', () => {

            // given
            const DOCUMENT_SPY = jest.spyOn (document, 'removeEventListener')
            const { unmount } = renderHook (() => useKeyboardToggle ())

            expect (DOCUMENT_SPY).toHaveBeenCalledTimes (0)

            // when
            unmount ()

            // then
            expect (DOCUMENT_SPY).toHaveBeenCalledTimes (1)

        })
    
    })

})