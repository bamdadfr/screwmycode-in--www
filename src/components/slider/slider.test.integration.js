import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import SliderComponent from './slider.component'
import { JestRender } from '../../../jest/jest-render'

const setup = () => {

    const handleValue = jest.fn ((v) => v)

    JestRender (
        <SliderComponent
            handleValue={handleValue}
            value={1}
        />,
    )

    const slider = screen.getByRole ('slider', {
        'name': 'slider',
    })

    return {
        slider,
        handleValue,
    }

}

test ('slider: should render', () => {

    const { slider, handleValue } = setup ()

    expect (slider).toBeInTheDocument ()

    expect (slider).toBeVisible ()

    expect (slider).toBeEnabled ()

    expect (slider).toHaveValue ('1')

    expect (handleValue).toHaveBeenCalledTimes (1)

})

test ('slider: should have a minimum of 0.5', () => {

    const instance = setup ()
    const { slider, handleValue } = instance

    expect (handleValue).toHaveBeenCalledTimes (1)

    expect (handleValue.mock.results[1 - 1].value).toBe ('1')

    fireEvent.change (slider, {
        'target': {
            'value': 0.5,
        },
    })

    expect (slider).toHaveValue ('0.5')

    expect (handleValue).toHaveBeenCalledTimes (2)

    expect (handleValue.mock.results[2 - 1].value).toBe ('0.5')

    fireEvent.change (slider, {
        'target': {
            'value': 0.1,
        },
    })

    expect (slider).toHaveValue ('0.5')

    expect (handleValue).toHaveBeenCalledTimes (2)

    expect (handleValue.mock.results[2 - 1].value).toBe ('0.5')

})

test ('slider: should have a maximum of 1.5', () => {

    const instance = setup ()
    const { slider, handleValue } = instance

    expect (handleValue).toHaveBeenCalledTimes (1)

    expect (handleValue.mock.results[1 - 1].value).toBe ('1')

    fireEvent.change (slider, {
        'target': {
            'value': 1.5,
        },
    })

    expect (slider).toHaveValue ('1.5')

    expect (handleValue).toHaveBeenCalledTimes (2)

    expect (handleValue.mock.results[2 - 1].value).toBe ('1.5')

    fireEvent.change (slider, {
        'target': {
            'value': 2,
        },
    })

    expect (slider).toHaveValue ('1.5')

    expect (handleValue).toHaveBeenCalledTimes (2)

    expect (handleValue.mock.results[2 - 1].value).toBe ('1.5')

})