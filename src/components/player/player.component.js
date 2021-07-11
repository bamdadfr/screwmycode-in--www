import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useRecoilState, useRecoilValue } from 'recoil'
import { speedAtom } from '../../atoms/speed.atom'
import { repeatAtom } from '../../atoms/repeat.atom'
import { StyledContainer } from './player.styles'
import { volumeAtom } from '../../atoms/volume.atom'

const propTypes = {
    'url': PropTypes.string.isRequired,
    'autoplay': PropTypes.bool,
}

const defaultProps = {
    'autoplay': false,
}

/**
 * @function
 * @name PlayerComponent
 * @description player: audio component
 * @param {*} props - props
 * @param {string} props.url - audio URL to play
 * @param {boolean} props.autoplay - autoplay
 * @returns {React.ReactElement} - react component
 */
export default function PlayerComponent ({ url, autoplay = false }) {

    const playerRef = useRef (null)
    const speed = useRecoilValue (speedAtom)
    const repeat = useRecoilValue (repeatAtom)
    const [volume, setVolume] = useRecoilState (volumeAtom)

    /**
     * @function
     * @name onMountPlayer
     * @description player: on mount
     */
    async function onMountPlayer () {

        const player = playerRef.current

        player.src = url

        player.load ()

        player.mozPreservesPitch = false

        player.playbackRate = speed

        player.volume = volume

        player.addEventListener ('canplay', async () => {

            if (autoplay) await player.play ()

        })

        player.addEventListener ('volumechange', () => setVolume (player.volume))

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

                const player = playerRef.current

                if (player.paused) {

                    player.play ()

                    return

                }

                player.pause ()

            }

        }

        document.addEventListener ('keypress', listener)

        return () => document.removeEventListener ('keypress', listener)

    }

    useEffect (onMountKeyboardEvents, [])

    /**
     * @function
     * @name handleRepeat
     * @description player: change auto loop when state changes
     */
    function handleRepeat () {

        const player = playerRef.current

        player.loop = repeat

    }

    useEffect (handleRepeat, [repeat])

    /**
     * @function
     * @name handleSpeed
     * @description player: change audio speed when state changes
     */
    function handleSpeed () {

        const player = playerRef.current

        player.playbackRate = speed

    }

    useEffect (handleSpeed, [speed])

    return (
        <>
            <StyledContainer>
                <audio
                    ref={playerRef}
                    aria-label="player"
                    controls
                    autoPlay={autoplay}
                >
                    <track kind="captions"/>
                </audio>
            </StyledContainer>
        </>
    )

}

PlayerComponent.propTypes = propTypes

PlayerComponent.defaultProps = defaultProps