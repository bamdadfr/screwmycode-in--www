import React from 'react'
import LayoutMainComponent from './layout-main.component'
import { JestChildren } from '../../../jest/jest-children'
import { JestInstance } from '../../../jest/jest-instance'

const instance = JestInstance (<LayoutMainComponent><JestChildren/></LayoutMainComponent>)

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
