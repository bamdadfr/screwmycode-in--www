import React from 'react'
import MetaComponent from './meta.component'
import { JestInstance } from '../../../jest/jest-instance'

const instance = JestInstance (<MetaComponent/>)

it ('should mount and match', () => {

    expect (instance).toBeDefined ()

    expect (instance).toMatchSnapshot ()

})
