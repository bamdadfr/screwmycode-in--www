import React from 'react'
import { render as defaultRender } from '@testing-library/react'
import { HowlerComponent } from './howler.component'

const render = () => {

    const { container } = defaultRender (
        <HowlerComponent/>,
    )

    return {
        container,
    }

}

describe ('HowlerComponent', () => {

    describe ('container', () => {

        it ('should be in the document, visible and empty', () => {

            const { container } = render ()

            expect (container).toBeInTheDocument ()

            expect (container).toBeVisible ()

            expect (container).toBeEmptyDOMElement ()
        
        })
    
    })

})