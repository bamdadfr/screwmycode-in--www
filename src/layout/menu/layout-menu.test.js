import React from 'react'
import { render } from '@testing-library/react'
import LayoutMenuComponent from './layout-menu.component'
import { JestWrapper } from '../../../jest/jest-wrapper'

const instance = () => render (JestWrapper (<LayoutMenuComponent/>))

console.log (instance ())

test ('home', () => {

    const { getByLabelText } = instance ()
    const home = getByLabelText ('home')

    expect (home).click

})