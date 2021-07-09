import React from 'react'
import renderer from 'react-test-renderer'
import { JestWrapper } from '../../../jest/jest-wrapper'
import IndicatorsComponent from './indicators.component'

describe ('IndicatorsComponent', () => {

    const Component = <IndicatorsComponent/>
    const instance = renderer.create (JestWrapper (Component)).toJSON ()

    it ('should match snapshot', () => {

        expect (instance).toMatchSnapshot ()

    })

    it ('should have a className', () => {

        expect (instance.props.className).toBeDefined ()

    })

    it ('should have 2 children', () => {

        expect (instance.children).toHaveLength (2)

    })

})