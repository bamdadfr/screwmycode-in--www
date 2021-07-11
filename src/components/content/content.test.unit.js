import React from 'react'
import ContentComponent from './content.component'
import { JestChildren } from '../../../jest/jest-children'
import { JestInstance } from '../../../jest/jest-instance'

const instance = JestInstance (<ContentComponent><JestChildren/></ContentComponent>)

it ('should mount and match', () => {

    expect (instance).toBeDefined ()

    expect (instance).toMatchSnapshot ()

})

it ('should have a classname prop from styled component', () => {

    expect (instance.props.className).toBeDefined ()

    expect (instance.props.className).toContain ('sc')

})

it ('should have 1+children children', () => {

    const children = JestChildren ().props.children.length

    expect (instance.children).toHaveLength (1 + children)

})
