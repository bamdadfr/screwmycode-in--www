import React from 'react'
import { render, screen } from '@testing-library/react'
import { AudioComponent } from './audio.component'

describe ('AudioComponent', () => {

    describe ('container', () => {

        it ('should be in the document', () => {

            const { container } = render (<AudioComponent url="http://localhost/my-file.mp3"/>)

            expect (container).toBeInTheDocument ()

        })

        it ('should be visible', () => {

            const { container } = render (<AudioComponent url="http://localhost/my-file.mp3"/>)

            expect (container).toBeVisible ()

        })

    })

    describe ('audio', () => {

        describe ('autoplay', () => {

            it ('should default to false', () => {

                render (<AudioComponent url="http://localhost/my-file.mp3"/>)

                const audio = screen.getByLabelText ('player')

                expect (audio.autoplay).toBe (false)
            
            })
        
        })

        describe ('keyboard events', () => {

            it ('should fire .play() on first keypress', () => {})

            it ('should fire .pause() on second keypress', () => {})

        })

    })

})