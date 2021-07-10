import React from 'react'
import { shallow } from 'enzyme'
import LayoutMetaComponent from '../layout-meta/layout-meta.component'
import LayoutMenuComponent from '../layout-header/layout-header.component'
import ToastComponent from '../toast/toast.component'
import LayoutComponent from './layout.component'
import { JestChildren } from '../../../jest/jest-children'
import { JestInstance } from '../../../jest/jest-instance'

const instance = JestInstance (<LayoutComponent><JestChildren/></LayoutComponent>)
const unit = shallow (<LayoutComponent><JestChildren/></LayoutComponent>)

it ('should mount and match', () => {

    expect (instance).toBeDefined ()

    expect (instance).toMatchSnapshot ()

})

it ('should have 4+children children', () => {

    const children = JestChildren ().props.children.length || 1
    const array = instance.map (element => element.children.length)
    const total = array.reduce ((total, current) => total + current)

    expect (total).toBe (4 + children)

})

it ('should contain LayoutMetaComponent', () => {

    expect (unit.containsMatchingElement (<LayoutMetaComponent/>)).toEqual (true)

})

it ('should contain LayoutHeaderComponent', () => {

    expect (unit.containsMatchingElement (<LayoutMenuComponent/>)).toEqual (true)

})

it ('should contain ToastComponent', () => {

    expect (unit.containsMatchingElement (<ToastComponent/>)).toEqual (true)

})
