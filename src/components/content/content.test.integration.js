import React from 'react'
import { screen } from '@testing-library/react'
import ContentComponent from './content.component'
import { JestChildren } from '../../../jest/jest-children'
import { JestRender } from '../../../jest/jest-render'

const render = () => {

    JestRender (
        <ContentComponent>
            <JestChildren/>
        </ContentComponent>,
    )

    const title = screen.getByRole ('link', {
        'name': 'screwmycode.in',
    })

    return { title }

}

test ('title: should render', () => {

    const { title } = render ()

    expect (title).toBeInTheDocument ()

    expect (title).toBeVisible ()

})
