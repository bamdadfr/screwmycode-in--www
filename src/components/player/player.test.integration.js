import React from 'react'
import { screen, act, fireEvent } from '@testing-library/react'
import PlayerComponent from './player.component'
import { JestRender } from '../../../jest/jest-render'

const url = 'https://domain.com/audio.mp3'
const render = () => JestRender (<PlayerComponent url={url}/>)

const elements = {
    'player': () => screen.getByLabelText ('player'),
}

// https://github.com/jsdom/jsdom/issues/2155
const mock = {
    'load': (fn) => {

        window.HTMLMediaElement.prototype.load = fn

    },
    'play': (fn) => {

        window.HTMLMediaElement.prototype.play = fn

    },
    'pause': (fn) => {

        window.HTMLMediaElement.prototype.pause = fn

    },
    'addTextTrack': (fn) => {

        window.HTMLMediaElement.prototype.addTextTrack = fn

    },
}

test ('player: should render', () => {

    const load = jest.fn ()
    const play = jest.fn ()

    mock.load (load)

    mock.play (play)

    render ()

    const player = elements.player ()

    expect (player).toBeInTheDocument ()

    expect (player).toBeVisible ()

    // onMount
    expect (player.src).toEqual (url)

    expect (load).toHaveBeenCalledTimes (1)

    expect (player.mozPreservesPitch).toEqual (false)

    expect (player.playbackRate).toEqual (1)

    expect (player.volume).toEqual (1)

    expect (play).toHaveBeenCalledTimes (1)

})

test ('player: should pause', () => {

    const pause = jest.fn ()

    mock.pause (pause)

    render ()

    const player = elements.player ()

    act (() => player.pause ())

    expect (pause).toHaveBeenCalledTimes (1)

})

test ('player: should toggle play state on space key', async () => {

    const play = jest.fn ()
    const pause = jest.fn ()

    mock.play (play)

    mock.pause (pause)

    render ()

    expect (play).toHaveBeenCalledTimes (1)

    fireEvent.keyDown (document, {
        'code': 'Space',
    })

    expect (pause).toHaveBeenCalledTimes (1)

})