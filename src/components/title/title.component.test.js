import React from 'react'
import { render, screen } from '@testing-library/react'
import { TitleComponent } from './title.component'

describe ('MetaComponent', () => {

    describe ('container', () => {

        it ('should be in the document', () => {

            const { container } = render (<TitleComponent/>)

            expect (container).toBeInTheDocument ()

        })

        it ('should be visible', () => {

            const { container } = render (<TitleComponent/>)

            expect (container).toBeVisible ()

        })

        it ('should not be empty', () => {

            const { container } = render (<TitleComponent/>)

            expect (container).not.toBeEmptyDOMElement ()

        })

    })

    describe ('heading', () => {

        it ('should be in the document', () => {

            render (<TitleComponent/>)

            const heading = screen.getByRole ('heading')

            expect (heading).toBeInTheDocument ()
        
        })

        it ('should be visible', () => {

            render (<TitleComponent/>)

            const heading = screen.getByRole ('heading')

            expect (heading).toBeVisible ()
        
        })

        it ('should be a link', () => {

            render (<TitleComponent/>)

            const link = screen.getByRole ('link')

            expect (link).toBeEnabled ()

        })

        it ('should display screwmycode.in', () => {

            render (<TitleComponent/>)

            const heading = screen.getByRole ('heading')

            expect (heading).toHaveTextContent ('screwmycode.in')
        
        })

    })

})