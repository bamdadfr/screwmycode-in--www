import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { useRecoilState, useRecoilValue } from 'recoil'
import { speedAtom } from '../../atoms/speed.atom'
import { repeatAtom } from '../../atoms/repeat.atom'
import { StyledContainer } from './player.styles'
import { volumeAtom } from '../../atoms/volume.atom'

const propTypes = {
    'url': PropTypes.string.isRequired,
}

/**
 * @function
 * @name PlayerComponent
 * @description player: audio component
 * @param {string} url - audio URL to play
 * @returns {React.ReactElement} - react component
 */
export default function PlayerComponent ({ url }) {

    const ref = useRef (null)
    const speed = useRecoilValue (speedAtom)
    const repeat = useRecoilValue (repeatAtom)
    const [volume, setVolume] = useRecoilState (volumeAtom)
    const [paused, setPaused] = useState (undefined)

    /**
     * @function
     * @name onMountPlayer
     * @description player: on mount
     */
    function onMountPlayer () {

        const audio = ref.current

        audio.src = url

        audio.load ()

        audio.mozPreservesPitch = false

        audio.playbackRate = speed

        audio.volume = volume

        audio.play ()

        audio.addEventListener ('play', () => setPaused (false))

        audio.addEventListener ('pause', () => setPaused (true))

        audio.addEventListener ('volumechange', () => setVolume (audio.volume))

    }

    useEffect (onMountPlayer, [])

    /**
     * @function
     * @name onMountKeyboardEvents
     * @description player: on keyboard events
     * @returns {Function<void>} - remove event listener (useEffect)
     */
    function onMountKeyboardEvents () {

        const listener = (event) => {

            if (event.code === 'Space') {

                const audio = ref.current

                if (paused) {

                    audio.play ()

                    return

                }

                audio.pause ()

            }

        }

        document.addEventListener ('keydown', listener)

        return () => document.removeEventListener ('keydown', listener)

    }

    useEffect (onMountKeyboardEvents, [])

    /**
     * @function
     * @name onRepeatChange
     * @description player: change auto loop when state changes
     */
    function onRepeatChange () {

        const audio = ref.current

        audio.loop = repeat

    }

    useEffect (onRepeatChange, [repeat])

    /**
     * @function
     * @name onSpeedChange
     * @description player: change audio speed when state changes
     */
    function onSpeedChange () {

        const audio = ref.current

        audio.playbackRate = speed

    }

    useEffect (onSpeedChange, [speed])

    return (
        <>
            <StyledContainer>
                <audio
                    ref={ref}
                    controls
                    aria-label="player"
                >
                    <track kind="captions"/>
                </audio>
            </StyledContainer>
        </>
    )

}

PlayerComponent.propTypes = propTypes