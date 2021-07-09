import React from 'react'
import renderer from 'react-test-renderer'
import ToastComponent from '@/components/toast/toast.component'

describe ('ToastComponent', () => {

    const Component = <ToastComponent/>
    const instance = renderer.create (Component).toJSON ()

    it ('should match snapshot', () => {

        expect (instance).toMatchSnapshot ()
    
    })

    it ('should have 1 children', () => {

        expect (instance.children).toHaveLength (1)
    
    })

})