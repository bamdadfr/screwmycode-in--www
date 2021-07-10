import React from 'react'
import LayoutMetaComponent from './layout-meta.component'
import { JestInstance } from '../../../jest/jest-instance'

const instance = JestInstance (<LayoutMetaComponent/>)

it ('should mount and match', () => {

    expect (instance).toBeDefined ()

    expect (instance).toMatchSnapshot ()

})
