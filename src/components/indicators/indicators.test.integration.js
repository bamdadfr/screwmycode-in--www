import React from 'react'
import { screen } from '@testing-library/react'
import { IndicatorsComponent } from './indicators.component'
import { JestRender } from '../../../jest/jest-render'

const render = () => {

    JestRender (<IndicatorsComponent/>)

    const percentage = {}

    percentage.title = screen.getByText ('percent')

    percentage.value = screen.getByRole ('textbox', {
        'name': 'percentage value',
    })

    const semitones = {}

    semitones.title = screen.getByText ('semitone')

    semitones.value = screen.getByRole ('textbox', {
        'name': 'semitones value',
    })

    return {
        percentage,
        semitones,
    }

}

test ('percentage: title should render', () => {

    const { percentage } = render ()

    expect (percentage.title).toBeInTheDocument ()

    expect (percentage.title).toBeVisible ()

    expect (percentage.title).toEqual (screen.getByTitle ('percentage'))

})

test ('percentage: value should render', () => {

    const { percentage } = render ()

    expect (percentage.value).toBeInTheDocument ()

    expect (percentage.value).toBeVisible ()

    expect (percentage.value).toBeDisabled ()

    expect (percentage.value).toHaveValue ('0.0')

})

test ('semitones: title should render', () => {

    const { semitones } = render ()

    expect (semitones.title).toBeInTheDocument ()

    expect (semitones.title).toBeVisible ()

    expect (semitones.title).toEqual (screen.getByTitle ('semitones'))

})

test ('semitones: value should render', () => {

    const { semitones } = render ()

    expect (semitones.value).toBeInTheDocument ()

    expect (semitones.value).toBeVisible ()

    expect (semitones.value).toBeDisabled ()

    expect (semitones.value).toHaveValue ('0.0')

})