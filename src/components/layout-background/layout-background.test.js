import React from 'react'
import renderer from 'react-test-renderer'
import LayoutBackgroundComponent from './layout-background.component'

describe ('LayoutBackgroundComponent', () => {

    const Component = <LayoutBackgroundComponent/>
    const instance = renderer.create (Component).toJSON ()

    it ('should match snapshot', () => {

        expect (instance).toMatchSnapshot ()

    })

    it ('should have no children', () => {

        expect (instance.children).toBeNull ()

    })

})