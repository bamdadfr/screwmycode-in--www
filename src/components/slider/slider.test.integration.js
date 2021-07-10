import React from 'react'
import { fireEvent, screen } from '@testing-library/react'
import SliderComponent from './slider.component'
import { JestRender } from '../../../jest/jest-render'

const render = () => JestRender (<SliderComponent/>)

test ('slider: should render', () => {

    render ()

    const slider = screen.getByRole ('slider', {
        'name': 'slider',
    })

    expect (slider).toBeInTheDocument ()

    expect (slider).toBeVisible ()

    expect (slider).toBeEnabled ()

    expect (slider).toHaveValue ('1')

})

test ('slider: should have a minimum of 0.5', () => {

    render ()

    const slider = screen.getByRole ('slider', {
        'name': 'slider',
    })

    fireEvent.change (slider, {
        'target': {
            'value': 0.5,
        },
    })

    expect (slider).toHaveValue ('0.5')

    fireEvent.change (slider, {
        'target': {
            'value': 0.1,
        },
    })

    expect (slider).toHaveValue ('0.5')

})

test ('slider: should have a maximum of 1.5', () => {

    render ()

    const slider = screen.getByRole ('slider', {
        'name': 'slider',
    })

    fireEvent.change (slider, {
        'target': {
            'value': 1.5,
        },
    })

    expect (slider).toHaveValue ('1.5')

    fireEvent.change (slider, {
        'target': {
            'value': 2,
        },
    })

    expect (slider).toHaveValue ('1.5')

})