import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { SliderComponent } from './slider.component'
import { JestWithStyledComponents } from '../../../../../jest'
import * as useSliderComponent from './hooks/use-slider-component'

describe ('SliderComponent', () => {

    describe ('container', () => {

        it ('should be in the document', () => {

            const { container } = render (JestWithStyledComponents (<SliderComponent/>))

            expect (container).toBeInTheDocument ()

        })

        it ('should be visible', () => {

            const { container } = render (JestWithStyledComponents (<SliderComponent/>))

            expect (container).toBeVisible ()

        })

        it ('should not be empty', () => {

            const { container } = render (JestWithStyledComponents (<SliderComponent/>))

            expect (container).not.toBeEmptyDOMElement ()

        })

    })

    describe ('slider', () => {

        it ('should be enabled', () => {

            render (JestWithStyledComponents (<SliderComponent/>))

            const slider = screen.getByRole ('slider')

            expect (slider).toBeEnabled ()
        
        })

        it ('should have a default value of 1', () => {

            render (JestWithStyledComponents (<SliderComponent/>))

            const slider = screen.getByRole ('slider')

            expect (slider).toHaveValue ('1')

        })

        it ('should have a minimum value of 0.5', () => {

            render (JestWithStyledComponents (<SliderComponent/>))

            const slider = screen.getByRole ('slider')

            fireEvent.change (slider, {
                'target': {
                    'value': 0.1,
                },
            })

            expect (slider).toHaveValue ('0.5')

        })

        it ('should have a maximmum value of 1.5', () => {

            render (JestWithStyledComponents (<SliderComponent/>))

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

            render (JestWithStyledComponents (<SliderComponent/>))

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