import React from 'react'
import { render as defaultRender } from '@testing-library/react'
import OldYoutubePage, { getServerSideProps } from '../../pages/youtube/[id]'
import { WithStyledComponents } from '../../app/components'

const render = () => {

    const { container } = defaultRender (
        <WithStyledComponents>
            <OldYoutubePage/>
        </WithStyledComponents>,
    )

    return {
        container,
    }

}

describe ('NotFoundPage', () => {

    describe ('container', () => {

        it ('should be in the document, visible and empty', () => {

            const { container } = render ()

            expect (container).toBeInTheDocument ()

            expect (container).toBeVisible ()

            expect (container).toBeEmptyDOMElement ()
        
        })
    
    })

    describe ('getServerSideProps', () => {

        const context = {
            'params': {
                'id': 'id',
            },
            'query': {
                'speed': 1,
            },
        }

        const expected = {
            'redirect': {
                'destination': `/youtube/${context.params.id}/${context.query.speed.toString ()}`,
                'permanent': true,
            },
        }

        it ('should match expected and context', () => {

            expect (getServerSideProps (context)).toEqual (expected)
        
        })
    
    })

})