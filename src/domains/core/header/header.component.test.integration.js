import React from 'react'
import { screen } from '@testing-library/react'
import { HeaderComponent } from './header.component'
import { JestRender } from '../../../../jest/jest-render'

const render = () => {

    JestRender (<HeaderComponent/>)

    const home = screen.getByRole ('button', { 'name': 'home' })
    const repeat = screen.getByRole ('button', { 'name': 'repeat' })

    return {
        home,
        repeat,
    }

}

test ('home: should render', () => {

    const { home } = render ()

    expect (home).toBeInTheDocument ()

    expect (home).toBeVisible ()

    expect (home).toBeEnabled ()

})

test ('repeat: should render', () => {

    const { repeat } = render ()

    expect (repeat).toBeInTheDocument ()

    expect (repeat).toBeVisible ()

    expect (repeat).toBeEnabled ()

})