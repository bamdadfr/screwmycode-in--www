import React from 'react'
import { fireEvent, render as defaultRender, screen } from '@testing-library/react'
import { PlayerSpeedComponent } from './player-speed.component'
import { WithStyledComponents } from '../../app/components'
import { MOCK_STATE } from './player-speed.component.test.mock'

const render = () => {

    const { container } = defaultRender (
        <WithStyledComponents>
            <PlayerSpeedComponent/>
        </WithStyledComponents>,
    )

    return {
        container,
        'slider': screen.getByRole ('slider'),
    }

}

afterEach (() => jest.resetAllMocks ())

describe ('PlayerSpeedComponent', () => {

    describe ('container', () => {

        it ('should be in the document', () => {

            const { container } = render ()

            expect (container).toBeInTheDocument ()

        })

        it ('should be visible', () => {

            const { container } = render ()

            expect (container).toBeVisible ()

        })

        it ('should not be empty', () => {

            const { container } = render ()

            expect (container).not.toBeEmptyDOMElement ()

        })

    })

    describe ('slider', () => {

        it ('should be enabled', () => {

            const { slider } = render ()

            expect (slider).toBeEnabled ()

        })

        it ('should have a default value of 1', () => {

            const { slider } = render ()

            expect (slider).toHaveValue ('1')

        })

        it ('should have a minimum value of 0.5', () => {

            const { slider } = render ()

            fireEvent.change (slider, {
                'target': {
                    'value': 0.1,
                },
            })

            expect (slider).toHaveValue ('0.5')

        })

        it ('should have a maximmum value of 1.5', () => {

            const { slider } = render ()

            fireEvent.change (slider, {
                'target': {
                    'value': 2,
                },
            })

            expect (slider).toHaveValue ('1.5')

        })

        it ('should fire .onChange() when user interacts with the slider', () => {

            // given
            const { onChange } = MOCK_STATE ()
            const { slider } = render ()

            expect (onChange).toHaveBeenCalledTimes (0)

            // when
            fireEvent.change (slider, {
                'target': {
                    'value': 0.5,
                },
            })

            // then
            expect (onChange).toHaveBeenCalledTimes (1)

        })
    
    })

})