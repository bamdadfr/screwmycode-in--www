import { renderHook, act } from '@testing-library/react-hooks'
import { useHeaderComponent } from './use-header-component'

describe ('useHeaderComponent', () => {

    describe ('repeat', () => {

        it ('should default to true', () => {

            const { result } = renderHook (() => useHeaderComponent ())

            expect (result.current.repeat).toBe (true)
        
        })

        it ('should toggle when .toggleRepeat is fired', () => {

            // given
            const { result } = renderHook (() => useHeaderComponent ())

            expect (result.current.repeat).toBe (true)

            // when
            act (() => {

                result.current.toggleRepeat ()

            })

            // then
            expect (result.current.repeat).toBe (false)

            // when
            act (() => {

                result.current.toggleRepeat ()
            
            })

            // then
            expect (result.current.repeat).toBe (true)

        })
    
    })

    describe ('toggleRepeat', () => {

        it ('should be a function', () => {

            const { result } = renderHook (() => useHeaderComponent ())

            expect (typeof result.current.toggleRepeat).toBe ('function')

        })
    
    })

})