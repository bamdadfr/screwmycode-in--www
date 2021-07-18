import { renderHook, act } from '@testing-library/react-hooks'
import { useSliderComponent } from './use-slider-component'

describe ('useSliderComponent', () => {

    describe ('value', () => {

        it ('should default to state.speed which is 1', () => {

            const { result } = renderHook (() => useSliderComponent ())

            expect (result.current.value).toBe (1)
        
        })

        it ('should change when .onChange() is fired', () => {

            // given
            const { result } = renderHook (() => useSliderComponent ())
            // when
            const event = { 'target': { 'value': 1.23 }}

            act (() => {

                result.current.onChange (event)
            
            })

            // then
            expect (result.current.value).toBe (event.target.value)
        
        })
    
    })

    describe ('onChange', () => {

        it ('should be a function', () => {

            const { result } = renderHook (() => useSliderComponent ())

            expect (typeof result.current.onChange).toBe ('function')
        
        })

    })

})