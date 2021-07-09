import React from 'react'
import { render } from '@testing-library/react'
import { JestWrapper } from '../../../jest/jest-wrapper'
import IndicatorsComponent from './indicators.component'

const instance = () => render (JestWrapper (<IndicatorsComponent/>))

test ('percentage title', () => {

    const { getByLabelText } = instance ()
    const el = getByLabelText ('percentage title')

    expect (el).toHaveTextContent ('percent')

})

test ('percentage value', () => {

    const { getByLabelText } = instance ()
    const el = getByLabelText ('percentage value')

    expect (el).toHaveTextContent ('0.0')

})

test ('semitones title', () => {

    const { getByLabelText } = instance ()
    const el = getByLabelText ('semitones title')

    expect (el).toHaveTextContent ('semitone')

})

test ('semitones value', () => {

    const { getByLabelText } = instance ()
    const el = getByLabelText ('semitones value')

    expect (el).toHaveTextContent ('0.0')

})