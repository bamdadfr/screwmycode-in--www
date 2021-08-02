import React from 'react'
import { render, screen } from '@testing-library/react'
import { NativeComponent } from './native.component'
import { MOCK_URL } from './hooks/use-native-component.mock'

describe ('NativeComponent', () => {

    describe ('container', () => {

        it ('should be in the document', () => {

            const { container } = render (<NativeComponent url={MOCK_URL}/>)

            expect (container).toBeInTheDocument ()

        })

        it ('should be visible', () => {

            const { container } = render (<NativeComponent url={MOCK_URL}/>)

            expect (container).toBeVisible ()

        })

    })

    describe ('audio', () => {

        describe ('autoplay', () => {

            it ('should default to false', () => {

                render (<NativeComponent url={MOCK_URL}/>)

                const audio = screen.getByLabelText ('player')

                expect (audio.autoplay).toBe (false)
            
            })
        
        })

        describe ('keyboard events', () => {

            it ('should fire .play() on first keypress', () => {
                // todo
            })

            it ('should fire .pause() on second keypress', () => {
                // todo
            })

        })

    })

})