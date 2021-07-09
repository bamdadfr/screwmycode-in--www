import React from 'react'
import renderer from 'react-test-renderer'
import SliderComponent from '@/components/slider/slider.component'
import { JestWrapper } from '../../../jest/jest-wrapper'

describe ('SliderComponent', () => {

    const Component = <SliderComponent/>
    const instance = renderer.create (JestWrapper (Component)).toJSON ()

    it ('should match snapshot', () => {

        expect (instance).toMatchSnapshot ()

    })

    it ('should have 1 children', () => {

        expect (instance.children).toHaveLength (1)

    })

})