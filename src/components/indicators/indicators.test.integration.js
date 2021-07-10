import React from 'react'
import { screen } from '@testing-library/react'
import IndicatorsComponent from './indicators.component'
import { JestRender } from '../../../jest/jest-render'

const render = () => JestRender (<IndicatorsComponent/>)

const elements = {
    'percentage': {
        'title': () => screen.getByText ('percent'),
        'value': () => screen.getByRole ('textbox', {
            'name': 'percentage value',
        }),
    },
    'semitones': {
        'title': () => screen.getByText ('semitone'),
        'value': () => screen.getByRole ('textbox', {
            'name': 'semitones value',
        }),
    },
}

test ('percentage: title should render', () => {

    render ()

    const title = elements.percentage.title ()

    expect (title).toBeInTheDocument ()

    expect (title).toBeVisible ()

    expect (title).toEqual (screen.getByTitle ('percentage'))

})

test ('percentage: value should render', () => {

    render ()

    const value = elements.percentage.value ()

    expect (value).toBeInTheDocument ()

    expect (value).toBeVisible ()

    expect (value).toBeDisabled ()

    expect (value).toHaveValue ('0.0')

})

test ('semitones: title should render', () => {

    render ()

    const title = elements.semitones.title ()

    expect (title).toBeInTheDocument ()

    expect (title).toBeVisible ()

    expect (title).toEqual (screen.getByTitle ('semitones'))

})

test ('semitones: value should render', () => {

    render ()

    const value = elements.semitones.value ()

    expect (value).toBeInTheDocument ()

    expect (value).toBeVisible ()

    expect (value).toBeDisabled ()

    expect (value).toHaveValue ('0.0')

})