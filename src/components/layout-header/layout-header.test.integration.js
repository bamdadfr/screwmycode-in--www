import React from 'react'
import { screen } from '@testing-library/react'
import LayoutHeaderComponent from './layout-header.component'
import { JestRender } from '../../../jest/jest-render'

const render = () => JestRender (<LayoutHeaderComponent/>)

test ('home: should render', () => {

    render ()

    const home = screen.getByRole ('button', { 'name': 'home' })

    expect (home).toBeInTheDocument ()

    expect (home).toBeVisible ()

    expect (home).toBeEnabled ()

})

test ('repeat: should render', () => {

    render ()

    const repeat = screen.getByRole ('button', { 'name': 'repeat' })

    expect (repeat).toBeInTheDocument ()

    expect (repeat).toBeVisible ()

    expect (repeat).toBeEnabled ()

})