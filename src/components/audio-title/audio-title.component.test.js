import React from 'react'
import { render, screen } from '@testing-library/react'
import { AudioTitleComponent } from './audio-title.component'

describe ('AudioTitleComponent', () => {

    describe ('container', () => {

        it ('should be in the document', () => {

            const { container } = render (<AudioTitleComponent title="title"/>)

            expect (container).toBeInTheDocument ()

        })

        it ('should be visible', () => {

            const { container } = render (<AudioTitleComponent title="title"/>)

            expect (container).toBeVisible ()

        })

        it ('should not be empty', () => {

            const { container } = render (<AudioTitleComponent title="title"/>)

            expect (container).not.toBeEmptyDOMElement ()

        })

    })

    describe ('title', () => {

        it ('should be in the document', () => {

            render (<AudioTitleComponent title="title"/>)

            const title = screen.getByRole ('heading')

            expect (title).toBeInTheDocument ()

        })

        it ('should be visible', () => {

            render (<AudioTitleComponent title="title"/>)

            const title = screen.getByRole ('heading')

            expect (title).toBeVisible ()

        })

        it ('should not be empty', () => {

            render (<AudioTitleComponent title="title"/>)

            const title = screen.getByRole ('heading')

            expect (title).not.toBeEmptyDOMElement ()

        })

        it ('should be empty if props.title is undefined', () => {

            // noinspection RequiredAttributes
            render (<AudioTitleComponent />)

            const title = screen.getByRole ('heading')

            expect (title).toBeEmptyDOMElement ()

        })

        it ('should display props.title', () => {

            const value = 'testing dummy placeholder value'

            render (<AudioTitleComponent title={value}/>)

            const title = screen.getByRole ('heading')

            expect (title).toHaveTextContent (value)

        })

    })

})