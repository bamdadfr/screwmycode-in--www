import React from 'react'
import { createBrowserHistory } from 'history'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import 'react-toastify/dist/ReactToastify.css'
import { PlayerControls } from './player.controls'
import { sendToast } from './toast.utils'
import { IconShare } from './icons'
import './player.styles.css'

export const Player = (props: any): React.ReactElement => {

    const { src, title, speed } = props
    const [isPlaying, setIsPlaying] = React.useState (false)
    const audioRef = React.useRef<HTMLAudioElement> (null)
    const getAudioElement = (): any => audioRef.current
    
    const switchPlayPause = (): void|Promise<void> => {

        const audio = getAudioElement ()

        return isPlaying ? audio.pause () : audio.play ()
    
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

    const onSpeedChange = React.useCallback ((s: number): void => {

        const audio = getAudioElement ()

        audio.playbackRate = s
        
        const history = createBrowserHistory ()

        history.push (`${window.location.pathname}?speed=${audio.playbackRate}`)
    
    }, [])

    React.useEffect (() => {
        
        document.title = `screwmycode.in - ${title}`
        
        const audio = getAudioElement ()
        
        audio.mozPreservesPitch = false
        
        audio.src = src
        
        audio.load ()
        
        onSpeedChange (speed)
            
        audio.onplay = (): void => setIsPlaying (true)
            
        audio.onpause = (): void => setIsPlaying (false)
    
    }, [src, speed, title, onSpeedChange])

    return (
        <>

            <KeyboardEventHandler
                handleKeys={['Space']}
                onKeyEvent={(): void|Promise<void> => switchPlayPause ()}
            />

            <div className="player-title">
                {title}
            </div>

            <div className="player-icons">
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
                <img
                    src={IconShare}
                    alt="player-icon-share"
                    className="player-icon-share"
                    onClick={(): void => copyToClipboard ()}
                />
            </div>

            <div className="player">
                <audio className="w-100" ref={audioRef} controls>
                    <track kind="captions" />
                </audio>
            </div>

            <PlayerControls
                init={speed}
                speedCallback={(s: number): void => onSpeedChange (s)}
            />
        </>
    )

}
