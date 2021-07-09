import React from 'react'
import renderer from 'react-test-renderer'
import Component from './layout-menu.component'
import {JestWrapper} from '../../../jest/jest-wrapper'

describe('LayoutHeaderComponent', () => {

    const Component = <Component/>
    const instance = renderer.create(JestWrapper(Component)).toJSON()

    it('should match snapshot', () => {

        expect(instance).toMatchSnapshot()

    })

    it('should have 2 children', () => {

        expect(instance.children).toHaveLength(2)

    })

})