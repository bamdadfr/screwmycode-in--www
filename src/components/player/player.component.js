import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { StyledContainer } from './player.styles'

const propTypes = {
    'url': PropTypes.string.isRequired,
    'playbackRate': PropTypes.number.isRequired,
    'loop': PropTypes.bool.isRequired,
    'volume': PropTypes.number.isRequired,
    'handleVolume': PropTypes.func.isRequired,
    'autoplay': PropTypes.bool.isRequired,
}

/**
 * @function
 * @name PlayerComponent
 * @description player: audio component
 * @param {object} props - props
 * @param {string} props.url - url
 * @param {number} props.playbackRate - speed
 * @param {boolean} props.loop - repeat
 * @param {number} props.volume - volume
 * @param {Function} props.handleVolume - callback for volume
 * @param {boolean} props.autoplay - autoplay
 * @returns {React.ReactElement} - react component
 */
export function PlayerComponent ({
    url,
    playbackRate,
    loop,
    volume,
    handleVolume,
    autoplay,
}) {

    const playerRef = useRef (null)

    /**
     * @function
     * @name onMount
     * @description setup player + volume listener + keyboard listener
     * @returns {Function<void>} clean listeners
     */
    function onMount () {

        // player
        const player = playerRef.current

        player.mozPreservesPitch = false

        player.volume = volume

        const playerVolumeListener = () => handleVolume (player.volume)

        player.addEventListener ('volumechange', playerVolumeListener)

        // keyboard
        const keyboardListener = (event) => {

            if (event.code === 'Space') {

                const player = playerRef.current

                if (player.paused) {

                    player.play ()

                    return

                }

                player.pause ()

            }

        }

        document.addEventListener ('keypress', keyboardListener)

        // cleanup
        return () => {

            player.removeEventListener ('volumechange', playerVolumeListener)

            document.removeEventListener ('keypress', keyboardListener)

        }

    }

    useEffect (onMount, [])

    /**
     * @function
     * @name onUrl
     * @description update url + loading listener
     * @returns {Promise<void>} cleanup
     */
    async function onUrl () {

        const player = playerRef.current

        player.src = url

        player.load ()

        player.playbackRate = playbackRate

        const loadingListener = async () => {

            if (autoplay) await player.play ()

        }

        player.addEventListener ('canplay', loadingListener)

        return () => {

            player.removeEventListener ('canplay', loadingListener)

        }

    }

    useEffect (onUrl, [url])

    /**
     * @function
     * @name onLoop
     * @description update loop (repeat mode)
     */
    function onLoop () {

        const player = playerRef.current

        player.loop = loop

    }

    useEffect (onLoop, [loop])

    /**
     * @function
     * @name onPlaybackRate
     * @description update playback rate (speed)
     */
    function onPlaybackRate () {

        const player = playerRef.current

        player.playbackRate = playbackRate

    }

    useEffect (onPlaybackRate, [playbackRate])

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