import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import LayoutMetaComponent from '@/components/layout-meta/layout-meta.component'
import LayoutHeaderComponent from '@/components/layout-header/layout-header.component'
import ToastComponent from '@/components/toast/toast.component'
import LayoutComponent from './layout.component'
import { JestWrapper } from '../../../jest/jest-wrapper'
import { JestChildren } from '../../../jest/jest-children'

describe ('LayoutComponent', () => {

    const Component = <LayoutComponent><JestChildren/></LayoutComponent>
    const instance = renderer.create (JestWrapper (Component)).toJSON ()
    const unit = shallow (Component)

    // console.log(instance)

    it ('should match snapshot', () => {

        expect (instance).toMatchSnapshot ()

    })

    it ('should have 4+children children', () => {

        const children = JestChildren ().props.children.length || 1
        const array = instance.map (element => element.children.length)
        const total = array.reduce ((total, current) => total + current)

        expect (total).toBe (4 + children)

    })

    it ('should contain LayoutMetaComponent', () => {

        expect (unit.find (LayoutMetaComponent)).toHaveLength (1)

    })

    it ('should contain LayoutHeaderComponent', () => {

        expect (unit.find (LayoutHeaderComponent)).toHaveLength (1)

    })

    it ('should contain ToastComponent', () => {

        expect (unit.find (ToastComponent)).toHaveLength (1)

    })

}
    ,
)