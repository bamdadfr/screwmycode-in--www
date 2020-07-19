import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { createBrowserHistory } from 'history'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import 'react-toastify/dist/ReactToastify.css'
import { PlayerControls } from './player.controls'
import { sendToast } from './toast.utils'
import { IconShare } from './icons'
import './player.styles.css'
import { playerStateIsPlaying, playerStateSource, playerStateSpeed, playerStateTitle } from './player.state'
import { IPlayerAudioElement } from './player.types'

export const Player = (): React.ReactElement => {

    // const { player, setStatePlayerIsPlaying } = props
    const [isPlaying, setIsPlaying] = useRecoilState (playerStateIsPlaying)
    const source = useRecoilValue (playerStateSource)
    const title = useRecoilValue (playerStateTitle)
    const speed = useRecoilValue (playerStateSpeed)
    const audioRef = React.useRef<IPlayerAudioElement> (null)
    const getAudioElement = (): IPlayerAudioElement|null => audioRef.current
    
    const switchPlayPause = (): void|Promise<void> => {

        const audio = getAudioElement ()

        if (audio) {

            return isPlaying ? audio.pause () : audio.play ()
        
        }
    
    }

    const copyToClipboard = (): void => {

        const audio = getAudioElement ()

        if (audio) {

            const el = document.createElement ('textarea')

            sendToast ('copied to clipboard!')
    
            el.value = `https://${window.location.host}${window.location.pathname}?speed=${audio.playbackRate}`
    
            document.body.appendChild (el)
    
            el.select ()
    
            document.execCommand ('copy')
    
            document.body.removeChild (el)
    
        }
    
    }

    const onSpeedChange = React.useCallback ((speed: number): void => {

        const audio = getAudioElement ()

        if (audio) {

            audio.playbackRate = speed

            const history = createBrowserHistory ()
    
            history.push (`${window.location.pathname}?speed=${audio.playbackRate}`)
        
        }
    
    }, [])

    useEffect (() => {
        
        const audio = getAudioElement ()

        if (audio) {

            audio.mozPreservesPitch = false
        
            audio.src = source
            
            audio.load ()
            
            audio.onplay = (): void => setIsPlaying (true)
            
            audio.onpause = (): void => setIsPlaying (false)
    
        }

        return (): void => {

            setIsPlaying (false)
        
        }
        
    }, [source, setIsPlaying])
    
    useEffect (() => {

        document.title = `screwmycode.in - ${title}`
    
    }, [title])

    useEffect (() => {

        onSpeedChange (speed)

    }, [speed, onSpeedChange])

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

}