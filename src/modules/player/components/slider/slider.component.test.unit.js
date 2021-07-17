import React from 'react'
import { SliderComponent } from './slider.component'
import { JestInstance } from '../../../../../jest/jest-instance'

const instance = JestInstance (
    <SliderComponent
        value={1}
        handleValue={jest.fn ()}
    />,
)

it ('should mount and match', () => {

    expect (instance).toBeDefined ()

    expect (instance).toMatchSnapshot ()

})

it ('should have a classname prop from styled components', () => {

    expect (instance.props.className).toBeDefined ()

    expect (instance.props.className).toContain ('sc')

})

it ('should have 1 children', () => {

    expect (instance.children).toHaveLength (1)

})