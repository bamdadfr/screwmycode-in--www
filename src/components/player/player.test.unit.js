import React from 'react'
import PlayerComponent from './player.component'
import { JestInstance } from '../../../jest/jest-instance'

const url = 'https://dummy.audio.url'
const instance = JestInstance (<PlayerComponent url={url}/>)

it ('should mount and match', () => {

    expect (instance).toBeDefined ()

    expect (instance).toMatchSnapshot ()

})

it ('should have a classname prop from styled components', () => {

    expect (instance.props.className).toBeDefined ()

    expect (instance.props.className).toContain ('sc')

})

it ('should have 1 children', () => {

    expect (instance.children).toHaveLength (1)

})
