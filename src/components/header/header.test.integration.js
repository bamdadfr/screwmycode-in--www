import React from 'react'
import { screen } from '@testing-library/react'
import HeaderComponent from './header.component'
import { JestRender } from '../../../jest/jest-render'

const render = () => JestRender (<HeaderComponent/>)

const elements = {
    'home': () => screen.getByRole ('button', { 'name': 'home' }),
    'repeat': () => screen.getByRole ('button', { 'name': 'repeat' }),
}

test ('home: should render', () => {

    render ()

    const home = elements.home ()

    expect (home).toBeInTheDocument ()

    expect (home).toBeVisible ()

    expect (home).toBeEnabled ()

})

test ('repeat: should render', () => {

    render ()

    const repeat = elements.repeat ()

    expect (repeat).toBeInTheDocument ()

    expect (repeat).toBeVisible ()

    expect (repeat).toBeEnabled ()

})