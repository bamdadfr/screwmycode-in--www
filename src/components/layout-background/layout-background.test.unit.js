import React from 'react'
import LayoutBackgroundComponent from './layout-background.component'
import { JestInstance } from '../../../jest/jest-instance'

const instance = JestInstance (<LayoutBackgroundComponent/>)

it ('should match snapshot', () => {

    expect (instance).toMatchSnapshot ()

})

it ('should have no children', () => {

    expect (instance.children).toBeNull ()

})
