import React from 'react'
import renderer from 'react-test-renderer'
import LayoutMainComponent from '@/components/layout-main/layout-main.component'
import { JestWrapper } from '../../../jest/jest-wrapper'
import { JestChildren } from '../../../jest/jest-children'

describe ('LayoutMainComponent', () => {

    const Component = <LayoutMainComponent><JestChildren/></LayoutMainComponent>
    const instance = renderer.create (JestWrapper (Component)).toJSON ()

    it ('should match snapshot', () => {

        expect (instance).toMatchSnapshot ()

    })

    it ('should have 1+children children', () => {

        const children = JestChildren ().props.children.length

        expect (instance.children).toHaveLength (1 + children)

    })

})