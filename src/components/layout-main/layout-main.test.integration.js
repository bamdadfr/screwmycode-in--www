import React from 'react'
import { screen } from '@testing-library/react'
import LayoutMainComponent from './layout-main.component'
import { JestChildren } from '../../../jest/jest-children'
import { JestRender } from '../../../jest/jest-render'

const render = () => JestRender (<LayoutMainComponent><JestChildren/></LayoutMainComponent>)

test ('title: should render', () => {

    render ()

    const title = screen.getByRole ('link', { 'name': 'screwmycode.in' })

    expect (title).toBeInTheDocument ()

})
