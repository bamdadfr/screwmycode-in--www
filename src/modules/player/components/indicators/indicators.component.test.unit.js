import React from 'react'
import { IndicatorsComponent } from './indicators.component'
import { JestInstance } from '../../../../../jest/jest-instance'

const instance = JestInstance (<IndicatorsComponent/>)

it ('should mount and match', () => {

    expect (instance).toBeDefined ()

    expect (instance).toMatchSnapshot ()

})

it ('should have a classname prop from styled component', () => {

    expect (instance.props.className).toBeDefined ()

    expect (instance.props.className).toContain ('sc')

})

it ('should have 2 children', () => {

    expect (instance.children).toHaveLength (2)

})