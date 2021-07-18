import React from 'react'
import { render } from '@testing-library/react'
import { IconHome } from './icon-home'

describe ('IconHome', () => {

    describe ('container', () => {

        it ('should be in the document', () => {

            const { container } = render (<IconHome/>)

            expect (container).toBeInTheDocument ()

        })

        it ('should be visible', () => {

            const { container } = render (<IconHome/>)

            expect (container).toBeVisible ()

        })

        it ('should be enabled', () => {

            const { container } = render (<IconHome/>)

            expect (container).toBeEnabled ()

        })

        it ('should not be empty', () => {

            const { container } = render (<IconHome/>)

            expect (container).not.toBeEmptyDOMElement ()

        })

    })

})