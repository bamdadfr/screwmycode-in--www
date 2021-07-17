import React from 'react'
import { AudioComponent } from './audio.component'
import { JestInstance } from '../../../../../jest/jest-instance'

const url = 'https://dummy.audio.url'

const instance = JestInstance (
    <AudioComponent
        url={url}
        playbackRate={1}
        loop
        volume={1}
        handleVolume={jest.fn ()}
        autoplay={false}
    />,
)

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
