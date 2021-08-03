import React from 'react'
import { cleanup, render as defaultRender, screen } from '@testing-library/react'
import { LoadingComponent } from './loading.component'

const render = () => {

    cleanup ()

    const { container } = defaultRender (<LoadingComponent/>)

    return {
        container,
        'image': screen.getByRole ('img'),
        'heading': screen.getByRole ('heading'),
        'link': screen.getByRole ('link'),
    }

}

describe ('LoadingComponent', () => {

    describe ('container', () => {

        it ('should be in the document, visible and not empty', () => {

            const { container } = render ()

            expect (container).toBeInTheDocument ()

            expect (container).toBeVisible ()

            expect (container).not.toBeEmptyDOMElement ()
        
        })
    
    })

    describe ('image-container', () => {

        it ('should be defined', () => {

            const { image } = render ()

            expect (image).toBeDefined ()
        
        })

        it ('should be an instance of HTMLImageElement', () => {

            const { image } = render ()

            expect (image instanceof HTMLImageElement).toBe (true)
        
        })
    
    })

    describe ('text-container', () => {

        describe ('heading', () => {

            it ('should be defined', () => {

                const { heading } = render ()

                expect (heading).toBeDefined ()

            })

            it ('should display the expected value', () => {

                const { heading } = render ()

                expect (heading).toHaveTextContent ('loading')
            
            })
        
        })

        describe ('link', () => {

            const { link } = render ()

            expect (link).toHaveTextContent ('Firefox')
        
        })

    })

})