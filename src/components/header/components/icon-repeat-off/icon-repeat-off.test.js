import React from 'react'
import { render } from '@testing-library/react'
import { IconRepeatOff } from './icon-repeat-off'

describe ('IconRepeatOff', () => {

    describe ('container', () => {

        it ('should be in the document', () => {

            const { container } = render (<IconRepeatOff/>)

            expect (container).toBeInTheDocument ()

        })

        it ('should be visible', () => {

            const { container } = render (<IconRepeatOff/>)

            expect (container).toBeVisible ()

        })

        it ('should not be empty', () => {

            const { container } = render (<IconRepeatOff/>)

            expect (container).not.toBeEmptyDOMElement ()

        })

    })

})