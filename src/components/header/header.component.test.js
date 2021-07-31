import React from 'react'
import { render, screen } from '@testing-library/react'
import { HeaderComponent } from './header.component'

describe ('HeaderComponent', () => {

    describe ('container', () => {

        it ('should be in the document', () => {

            const { container } = render (<HeaderComponent/>)

            expect (container).toBeInTheDocument ()
        
        })
    
        it ('should be visible', () => {

            const { container } = render (<HeaderComponent/>)

            expect (container).toBeVisible ()

        })

        it ('should not be empty', () => {

            const { container } = render (<HeaderComponent/>)

            expect (container).not.toBeEmptyDOMElement ()

        })

    })

    describe ('home icon', () => {

        it ('should be in the document', () => {

            render (<HeaderComponent/>)

            const home = screen.getByRole ('button', { 'name': 'home' })

            expect (home).toBeInTheDocument ()
        
        })

        it ('should be visible', () => {

            render (<HeaderComponent/>)

            const home = screen.getByRole ('button', { 'name': 'home' })

            expect (home).toBeVisible ()

        })

    })

})

