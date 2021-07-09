import React from 'react'
import renderer from 'react-test-renderer'
import LayoutMetaComponent from './layout-meta.component'

describe ('LayoutMetaComponent', () => {

    const Component = <LayoutMetaComponent/>
    const instance = renderer.create (Component).toJSON ()

    it ('should match snapshot', () => {

        expect (instance).toMatchSnapshot ()

    })

})