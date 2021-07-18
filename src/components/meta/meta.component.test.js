import React from 'react'
import { render } from '@testing-library/react'
import { MetaComponent } from './meta.component'

describe ('MetaComponent', () => {

    describe ('container', () => {

        it ('should be in the document', () => {

            const { container } = render (<MetaComponent/>)

            expect (container).toBeInTheDocument ()

        })

        it ('should be visible', () => {

            const { container } = render (<MetaComponent/>)

            expect (container).toBeVisible ()
        
        })

        it ('should be empty', () => {

            const { container } = render (<MetaComponent/>)

            expect (container).toBeEmptyDOMElement ()

        })
    
    })

})