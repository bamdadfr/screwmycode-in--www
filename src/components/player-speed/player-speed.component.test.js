import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { PlayerSpeedComponent } from './player-speed.component'
import { JestWithStyledComponents } from '../../../jest'
import * as useSliderComponent from './hooks/use-player-speed-component'

describe ('SpeedComponent', () => {

    describe ('container', () => {

        it ('should be in the document', () => {

            const { container } = render (JestWithStyledComponents (<PlayerSpeedComponent/>))

            expect (container).toBeInTheDocument ()

        })

        it ('should be visible', () => {

            const { container } = render (JestWithStyledComponents (<PlayerSpeedComponent/>))

            expect (container).toBeVisible ()

        })

        it ('should not be empty', () => {

            const { container } = render (JestWithStyledComponents (<PlayerSpeedComponent/>))

            expect (container).not.toBeEmptyDOMElement ()

        })

    })

    describe ('slider', () => {

        it ('should be enabled', () => {

            render (JestWithStyledComponents (<PlayerSpeedComponent/>))

            const slider = screen.getByRole ('slider')

            expect (slider).toBeEnabled ()
        
        })

        it ('should have a default value of 1', () => {

            render (JestWithStyledComponents (<PlayerSpeedComponent/>))

            const slider = screen.getByRole ('slider')

            expect (slider).toHaveValue ('1')

        })

        it ('should have a minimum value of 0.5', () => {

            render (JestWithStyledComponents (<PlayerSpeedComponent/>))

            const slider = screen.getByRole ('slider')

            fireEvent.change (slider, {
                'target': {
                    'value': 0.1,
                },
            })

            expect (slider).toHaveValue ('0.5')

        })

        it ('should have a maximmum value of 1.5', () => {

            render (JestWithStyledComponents (<PlayerSpeedComponent/>))

            const slider = screen.getByRole ('slider')

            fireEvent.change (slider, {
                'target': {
                    'value': 2,
                },
            })

            expect (slider).toHaveValue ('1.5')

        })

        it ('should fire .onChange() when user interacts with the slider', () => {

            // given
            const STATE_SPY = jest.spyOn (useSliderComponent, 'useSliderComponent')
            const ON_CHANGE = jest.fn ()

            STATE_SPY.mockReturnValue ({
                'value': 1,
                'onChange': ON_CHANGE,
            })

            render (JestWithStyledComponents (<PlayerSpeedComponent/>))

            const slider = screen.getByRole ('slider')

            expect (ON_CHANGE).toHaveBeenCalledTimes (0)

            // when
            fireEvent.change (slider, {
                'target': {
                    'value': 0.5,
                },
            })

            // then
            expect (ON_CHANGE).toHaveBeenCalledTimes (1)

        })
    
    })

})