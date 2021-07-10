import React from 'react'
import { screen } from '@testing-library/react'
import IndicatorsComponent from './indicators.component'
import { JestRender } from '../../../jest/jest-render'

const render = () => JestRender (<IndicatorsComponent/>)

test ('percentage: title should render', () => {

    render ()

    const title = screen.getByText ('percent')

    expect (title).toBeInTheDocument ()

    expect (title).toBeVisible ()

    expect (title).toEqual (screen.getByTitle ('percentage'))

})

test ('percentage: value should render', () => {

    render ()

    const value = screen.getByRole ('textbox', {
        'name': 'percentage value',
    })

    expect (value).toBeInTheDocument ()

    expect (value).toBeVisible ()

    expect (value).toBeDisabled ()

    expect (value).toHaveValue ('0.0')

})

test ('semitones: title should render', () => {

    render ()

    const title = screen.getByText ('semitone')

    expect (title).toBeInTheDocument ()

    expect (title).toBeVisible ()

    expect (title).toEqual (screen.getByTitle ('semitones'))

})

test ('semitones: value should render', () => {

    render ()

    const value = screen.getByRole ('textbox', {
        'name': 'semitones value',
    })

    expect (value).toBeInTheDocument ()

    expect (value).toBeVisible ()

    expect (value).toBeDisabled ()

    expect (value).toHaveValue ('0.0')

})