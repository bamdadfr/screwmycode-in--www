import React from 'react'
import { screen, act, waitFor } from '@testing-library/react'
import PlayerComponent from './player.component'
import { JestRender } from '../../../jest/jest-render'

const url = 'https://domain.com/audio.mp3'

const render = (autoplay = false) => JestRender (
    <PlayerComponent
        url={url}
        playbackRate={1}
        loop
        volume={1}
        handleVolume={jest.fn ()}
        autoplay={autoplay}
    />,
)

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

    expect (play).not.toHaveBeenCalled ()

})

test ('player: should play', () => {

    const play = jest.fn ()

    mock.play (play)

    render ()

    const player = elements.player ()

    act (() => player.play ())

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

test ('player: should not autoplay by default', () => {

    const play = jest.fn ()

    mock.play (play)

    render ()

    expect (play).not.toHaveBeenCalled ()

})

test ('player: should autoplay if prop is passed', () => {

    const play = jest.fn ()

    mock.play (play)

    render (true)

    waitFor (() => {

        expect (play).toHaveBeenCalledTimes (1)

    })

})

// missing space interactions