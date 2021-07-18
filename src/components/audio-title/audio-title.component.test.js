import React from 'react'
import { screen } from '@testing-library/react'
import { AudioTitleComponent } from './audio-title.component'
import { JestInstance, JestRender } from '../../../jest'

const setup = (title = 'title') => {

    const Component = () => <AudioTitleComponent title={title} />
    const instance = JestInstance (<Component/>)
    const render = JestRender (<Component/>)

    const elements = {
        'title': screen.getByRole ('heading'),
    }

    return {
        instance,
        render,
        elements,
    }

}

describe ('AudioTitleComponent', () => {

    describe ('unit testing', () => {

        describe ('instance', () => {

            it ('should be defined', () => {

                const { instance } = setup ()

                expect (instance).toBeDefined ()

            })

            it ('should match snapshot', () => {

                const { instance } = setup ()

                expect (instance).toMatchSnapshot ()
            
            })

        })

        describe ('styles', () => {

            it ('should have a defined classname', () => {

                const { instance } = setup ()

                expect (instance.props.className).toBeDefined ()

            })

            it ('should have a sc classname', () => {

                const { instance } = setup ()

                expect (instance.props.className).toContain ('sc')

            })

        })

        describe ('children', () => {

            it ('should have 1 child', () => {

                const { instance } = setup ()

                expect (instance.children).toHaveLength (1)

            })

        })

    })

    describe ('visual testing', () => {

        describe ('title', () => {

            it ('should be in the document', () => {

                const { title } = setup ().elements

                expect (title).toBeInTheDocument ()

            })

            it ('should be visible', () => {

                const { title } = setup ().elements

                expect (title).toBeVisible ()

            })

            it ('should be enabled', () => {

                const { title } = setup ().elements

                expect (title).toBeEnabled ()

            })

            it ('should have a title prop of test value', () => {

                const value = 'testing dummy placeholder value'
                const { elements } = setup (value)
                const { title } = elements

                expect (title).toHaveTextContent (value)

            })
        
        })
    
    })

})