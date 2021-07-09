import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useRecoilValue } from 'recoil'
import { audioSpeedAtom } from '../../atoms/audio-speed.atom'
import { audioLoopAtom } from '../../atoms/audio-loop.atom'
import { StyledContainer } from './player.styles'

const propTypes = {
    'url': PropTypes.string.isRequired,
}

/**
 * @function
 * @name PlayerComponent
 * @description player: audio component
 * @param {string} url - audio URL to play
 * @returns {React.ReactNode} - react component
 */
export default function PlayerComponent ({ url }) {

    const ref = useRef (null)
    const audioSpeed = useRecoilValue (audioSpeedAtom)
    const audioLoop = useRecoilValue (audioLoopAtom)

    /**
     * @function
     * @name onMount
     * @description player: on mount
     */
    function onMount () {

        const audio = ref.current

        audio.src = url

        audio.load ()

        audio.mozPreservesPitch = false

        audio.playbackRate = audioSpeed

        audio.addEventListener ('canplaythrough', () => {

            audio.play ()

        })

    }

    useEffect (onMount, [])

    /**
     * @function
     * @name onLoopChange
     * @description player: change auto loop when state changes
     */
    function onLoopChange () {

        const audio = ref.current

        audio.loop = audioLoop

    }

    useEffect (onLoopChange, [audioLoop])

    /**
     * @function
     * @name onSpeedChange
     * @description player: change audio speed when state changes
     */
    function onSpeedChange () {

        const audio = ref.current

        audio.playbackRate = audioSpeed

    }

    useEffect (onSpeedChange, [audioSpeed])

    /**
     * @function
     * @name onKeyboard
     * @description player: on keyboard events
     * @returns {Function<void>} - remove event listener (useEffect)
     */
    function onKeyboard () {

        const listener = (event) => {

            if (event.code === 'Space') {

                const audio = ref.current

                if (audio.paused) {

                    audio.play ()

                } else {

                    audio.pause ()

                }

            }

        }

        document.addEventListener ('keydown', listener)

        return () => document.removeEventListener ('keydown', listener)

    }

    useEffect (onKeyboard, [])

    return (
        <>
            <StyledContainer>
                <audio
                    ref={ref}
                    controls
                >
                    <track kind="captions"/>
                </audio>
            </StyledContainer>
        </>
    )

}

PlayerComponent.propTypes = propTypes