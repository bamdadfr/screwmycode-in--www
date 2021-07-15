import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import { PlayerComponent } from './player.component'
import { JestRender } from '../../../../jest/jest-render'

const render = (
    autoplay = false,
    url = 'http://localhost/undefined.mp3',
) => {

    const load = jest.fn ()
    const play = jest.fn ()
    const pause = jest.fn ()
    const addNextTrack = jest.fn ()

    window.HTMLMediaElement.prototype.load = load

    window.HTMLMediaElement.prototype.play = play

    window.HTMLMediaElement.prototype.pause = pause

    window.HTMLMediaElement.prototype.addNextTrack = addNextTrack

    JestRender (
        <PlayerComponent
            url={url}
            playbackRate={1}
            loop
            volume={1}
            handleVolume={jest.fn ()}
            autoplay={autoplay}
        />,
    )

    const player = screen.getByLabelText ('player')

    return {
        player,
        load,
        play,
        pause,
        addNextTrack,
    }

}

// https://github.com/jsdom/jsdom/issues/2155
test ('player: should render', () => {

    const url = 'http://localhost/myFile.mp3'
    const { player, load, play } = render (undefined, url)

    expect (player).toBeInTheDocument ()

    expect (player).toBeVisible ()

    // onMount
    expect (player.src).toEqual (url)

    expect (load).toHaveBeenCalledTimes (1)

    expect (player.mozPreservesPitch).toEqual (false)

    expect (player.playbackRate).toEqual (1)

    expect (player.volume).toEqual (1)

    expect (play).toHaveBeenCalledTimes (0)

})

test ('player: should play', () => {

    const { player, play } = render ()

    expect (play).toHaveBeenCalledTimes (0)

    player.play ()

    expect (play).toHaveBeenCalledTimes (1)

})

test ('player: should pause', () => {

    const { player, pause } = render ()

    player.pause ()

    expect (pause).toHaveBeenCalledTimes (1)

})

test ('player: should not autoplay by default', () => {

    const { play } = render (false)

    expect (play).toHaveBeenCalledTimes (0)

})

test ('player: should autoplay if prop is passed', () => {

    const { play } = render (true)

    waitFor (() => {

        expect (play).toHaveBeenCalledTimes (1)

    })

})

// missing space interactions