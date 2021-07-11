import React from 'react'
import { screen } from '@testing-library/react'
import ContentComponent from './content.component'
import { JestChildren } from '../../../jest/jest-children'
import { JestRender } from '../../../jest/jest-render'

const render = () => JestRender (<ContentComponent><JestChildren/></ContentComponent>)

const elements = {
    'title': () => screen.getByRole ('link', { 'name': 'screwmycode.in' }),
}

test ('title: should render', () => {

    render ()

    const title = elements.title ()

    expect (title).toBeInTheDocument ()

})
