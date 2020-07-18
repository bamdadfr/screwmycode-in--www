import React, { useEffect } from 'react'
import { createBrowserHistory } from 'history'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import 'react-toastify/dist/ReactToastify.css'
import { PlayerControls } from './player.controls'
import { sendToast } from './toast.utils'
import { IconShare } from './icons'
import './player.styles.css'
import { stateMap } from './state.map'

export const Player = stateMap ((props: any): React.ReactElement => {

    const { player, setStatePlayerIsPlaying } = props
    const audioRef = React.useRef<HTMLAudioElement> (null)
    const getAudioElement = (): any => audioRef.current
    
    const switchPlayPause = (): void|Promise<void> => {

        const audio = getAudioElement ()

        return player.isPlaying ? audio.pause () : audio.play ()
    
    }

    const copyToClipboard = (): void => {

        const audio = getAudioElement ()
        const el = document.createElement ('textarea')

        sendToast ('copied to clipboard!')

        el.value = `https://${window.location.host}${window.location.pathname}?speed=${audio.playbackRate}`

        document.body.appendChild (el)

        el.select ()

        document.execCommand ('copy')

        document.body.removeChild (el)
    
    }

    const onSpeedChange = React.useCallback ((speed: number): void => {

        const audio = getAudioElement ()

        audio.playbackRate = speed
        
        const history = createBrowserHistory ()

        history.push (`${window.location.pathname}?speed=${audio.playbackRate}`)
    
    }, [])

    useEffect (() => {
        
        const audio = getAudioElement ()
        
        audio.mozPreservesPitch = false
        
        audio.src = player.src
        
        audio.load ()
        
        audio.onplay = (): void => setStatePlayerIsPlaying (true)
        
        audio.onpause = (): void => setStatePlayerIsPlaying (false)

        return (): void => {

            setStatePlayerIsPlaying (false)
        
        }
        
    }, [player.src, setStatePlayerIsPlaying])
    
    useEffect (() => {

        document.title = `screwmycode.in - ${player.title}`
    
    }, [player.title])

    useEffect (() => {

        onSpeedChange (player.speed)

    }, [player.speed, onSpeedChange])

    return (
        <>

            <KeyboardEventHandler
                handleKeys={['Space']}
                onKeyEvent={(): void|Promise<void> => switchPlayPause ()}
            />

            <div className="player-title">
                {player.title}
            </div>

            <div className="player-icons">
                <span
                    onClick={(): void => copyToClipboard ()}
                    onKeyDown={(): void => undefined}
                    role="button"
                    tabIndex={-1}
                >
                    <img
                        src={IconShare}
                        alt="player-icon-share"
                        className="player-icon-share"
                    />
                </span>
            </div>

            <div className="player">
                <audio className="w-100" ref={audioRef} controls>
                    <track kind="captions" />
                </audio>
            </div>

            <PlayerControls />
        </>
    )

})