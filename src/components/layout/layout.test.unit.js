import React from 'react'
import LayoutComponent from './layout.component'
import HeaderComponent from '../header/header.component'
import MetaComponent from '../meta/meta.component'
import ContentComponent from '../content/content.component'
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
    const array = instance.map ((element) => element.children.length)
    const total = array.reduce ((total, current) => total + current)

    expect (total).toBe (3 + children)

})

it ('should contain LayoutMetaComponent', () => {

    expect (unit.containsMatchingElement (<MetaComponent/>)).toEqual (true)

})

it ('should contain LayoutHeaderComponent', () => {

    expect (unit.containsMatchingElement (<HeaderComponent/>)).toEqual (true)

})

it ('should contain LayoutMainComponent with children', () => {

    expect (unit.containsMatchingElement (<ContentComponent><JestChildren/></ContentComponent>)).toEqual (true)

})