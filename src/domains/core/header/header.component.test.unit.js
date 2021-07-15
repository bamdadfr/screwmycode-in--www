import React from 'react'
import { HeaderComponent } from './header.component'
import { JestInstance } from '../../../../jest/jest-instance'

const instance = JestInstance (<HeaderComponent/>)

it ('should mount and match', () => {

    expect (instance).toBeDefined ()

    expect (instance).toMatchSnapshot ()

})

it ('should have a classname prop from styled components', () => {

    expect (instance.props.className).toBeDefined ()

    expect (instance.props.className).toContain ('sc')

})

it ('should have 2 children', () => {

    expect (instance.children).toHaveLength (2)

})
