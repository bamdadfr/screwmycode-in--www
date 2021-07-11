import React from 'react'
import LayoutComponent from './layout.component'
import LayoutHeaderComponent from '../layout-header/layout-header.component'
import LayoutMetaComponent from '../layout-meta/layout-meta.component'
import LayoutMainComponent from '../layout-main/layout-main.component'
import { JestChildren } from '../../../jest/jest-children'
import { JestInstance } from '../../../jest/jest-instance'
import { JestUnit } from '../../../jest/jest-unit'

const instance = JestInstance (<LayoutComponent><JestChildren/></LayoutComponent>)
const unit = JestUnit (<LayoutComponent><JestChildren/></LayoutComponent>)

it ('should mount and match', () => {

    expect (instance).toBeDefined ()

    expect (instance).toMatchSnapshot ()

})

it ('should have 3+children children', () => {

    const children = JestChildren ().props.children.length || 1
    const array = instance.map (element => element.children.length)
    const total = array.reduce ((total, current) => total + current)

    expect (total).toBe (3 + children)

})

it ('should contain LayoutMetaComponent', () => {

    expect (unit.containsMatchingElement (<LayoutMetaComponent/>)).toEqual (true)

})

it ('should contain LayoutHeaderComponent', () => {

    expect (unit.containsMatchingElement (<LayoutHeaderComponent/>)).toEqual (true)

})

it ('should contain LayoutMainComponent with children', () => {

    expect (unit.containsMatchingElement (<LayoutMainComponent><JestChildren/></LayoutMainComponent>)).toEqual (true)

})