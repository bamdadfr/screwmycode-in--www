import { act, renderHook } from '@testing-library/react-hooks'
import { useInput } from './use-input'

describe ('useInput', () => {

    describe ('ref', () => {

        it ('should default to null', () => {

            const { result } = renderHook (() => useInput ())

            expect (result.current.ref.current).toBeNull ()
        
        })
    
    })

    describe ('value', () => {

        it ('should default to an empty string', () => {

            const { result } = renderHook (() => useInput ())

            expect (result.current.value).toBe ('')
        
        })

        it ('should return the same value passed as an argument', () => {

            const init = 'this is my initial testing value'
            const { result } = renderHook (() => useInput (init))

            expect (result.current.value).toBe (init)
        
        })
    
    })

    describe ('onChange', () => {

        it ('should set value', () => {

            // given: a default state
            const { result } = renderHook (() => useInput ())

            expect (result.current.value).toBe ('')

            // when: i fire the onChange event by typing something in the form input
            const event = {
                'target': { 'value': 'this is my user typing something in the input field' },
            }

            act (() => {

                result.current.onChange (event)

            })

            // then: i should get the value to be what the user typed
            expect (result.current.value).toBe (event.target.value)

        })
    
    })

    describe ('resetValue', () => {

        it ('should reset value to default', () => {

            // given: a modified state
            const init = 'initial value'
            const { result } = renderHook (() => useInput (init))
            const event = { 'target': { 'value': 'modified value' }}

            act (() => {

                result.current.onChange (event)
            
            })

            expect (result.current.value).toBe (event.target.value)

            // when: i fire resetValue
            act (() => {

                result.current.resetValue ()
            
            })

            // then: i expect the value to be back to its initial state
            expect (result.current.value).toBe (init)
        
        })
    
    })

})