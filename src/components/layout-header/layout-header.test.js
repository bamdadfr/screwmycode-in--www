import React from 'react'
import renderer from 'react-test-renderer'
import LayoutHeaderComponent from '@/components/layout-header/layout-header.component'
import { JestWrapper } from '../../../jest/jest-wrapper'

describe ('LayoutHeaderComponent', () => {

    const Component = <LayoutHeaderComponent/>
    const instance = renderer.create (JestWrapper (Component)).toJSON ()

    it ('should match snapshot', () => {

        expect (instance).toMatchSnapshot ()

    })

    it ('should have 2 children', () => {

        expect (instance.children).toHaveLength (2)

    })

})