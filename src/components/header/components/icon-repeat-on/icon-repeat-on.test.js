import React from 'react'
import { render } from '@testing-library/react'
import { IconRepeatOn } from './icon-repeat-on'

describe ('IconRepeatOff', () => {

    describe ('container', () => {

        it ('should be in the document', () => {

            const { container } = render (<IconRepeatOn/>)

            expect (container).toBeInTheDocument ()

        })

        it ('should be visible', () => {

            const { container } = render (<IconRepeatOn/>)

            expect (container).toBeVisible ()

        })

        it ('should be enabled', () => {

            const { container } = render (<IconRepeatOn/>)

            expect (container).toBeEnabled ()

        })

        it ('should not be empty', () => {

            const { container } = render (<IconRepeatOn/>)

            expect (container).not.toBeEmptyDOMElement ()

        })

    })

})