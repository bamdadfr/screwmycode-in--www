import React from 'react'
import { screen } from '@testing-library/react'
import LayoutMainComponent from './layout-main.component'
import { JestChildren } from '../../../jest/jest-children'
import { JestRender } from '../../../jest/jest-render'

const render = () => JestRender (<LayoutMainComponent><JestChildren/></LayoutMainComponent>)

const elements = {
    'title': () => screen.getByRole ('link', { 'name': 'screwmycode.in' }),
}

test ('title: should render', () => {

    render ()

    const title = elements.title ()

    expect (title).toBeInTheDocument ()

})
