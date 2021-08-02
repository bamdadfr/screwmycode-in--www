import React from 'react'
import { render as defaultRender } from '@testing-library/react'
import { DotsComponent } from './dots.component'

const render = () => {

    const { container } = defaultRender (<DotsComponent/>)

    return {
        container,
    }

}

describe ('DotsComponent', () => {

    describe ('container', () => {

        it ('should be in the document, visible and not empty', () => {

            const { container } = render ()

            expect (container).toBeInTheDocument ()

            expect (container).toBeVisible ()

            expect (container).not.toBeEmptyDOMElement ()
        
        })
        
    })

})