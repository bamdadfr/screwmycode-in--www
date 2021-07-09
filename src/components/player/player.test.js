import React from 'react'
import renderer from 'react-test-renderer'
import PlayerComponent from './player.component'
import { JestWrapper } from '../../../jest/jest-wrapper'

describe ('PlayerComponent', () => {

    const url = 'https://dummy'
    const Component = <PlayerComponent url={url}/>
    const instance = renderer.create (JestWrapper (Component)).toJSON ()

    it ('should match snapshot', () => {

        expect (instance).toMatchSnapshot ()

    })

    it ('should have 1 children', () => {

        expect (instance.children).toHaveLength (1)

    })

})