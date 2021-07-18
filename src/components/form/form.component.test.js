import React from 'react'
import { FormComponent } from './form.component'
import { JestInstance, JestRender } from '../../../jest'

const setup = () => {

    const Component = () => <FormComponent/>
    const instance = JestInstance (<Component/>)
    const render = JestRender (<Component/>)

    return {
        instance,
        render,
    }

}

describe ('FormComponent', () => {

    describe ('unit testing', () => {

        describe ('instance', () => {

            it ('should be defined', () => {

                const { instance } = setup ()

                expect (instance).toBeDefined ()
            
            })

            it ('should match snapshot', () => {

                // const { instance } = setup ()

                // expect (instance).toMatchSnapshot ()
            
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
    
    })

})