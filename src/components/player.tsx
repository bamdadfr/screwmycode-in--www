import React, { useEffect, useRef, useCallback, ReactElement } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { createBrowserHistory } from 'history'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import 'react-toastify/dist/ReactToastify.css'
import { PlayerControls } from './player.controls'
import { IconShare } from './icons'
import './player.styles.css'
import { playerStateIsPlaying, playerStateSource, playerStateSpeed, playerStateTitle } from './player.state'
import { copyToClipboard } from './player.utils'

export const Player = (): ReactElement => {

    const [isPlaying, setIsPlaying] = useRecoilState (playerStateIsPlaying)
    const source = useRecoilValue (playerStateSource)
    const title = useRecoilValue (playerStateTitle)
    const speed = useRecoilValue (playerStateSpeed)
    const audioRef: any = useRef (null)

    const switchPlayPause = useCallback ((audio: any) => {

        return isPlaying ? audio.pause () : audio.play ()
    
    }, [isPlaying])

    useEffect (() => {
        
        const audio: any = audioRef.current

        audio.mozPreservesPitch = false
        
        audio.src = source
        
        audio.load ()
        
        audio.onplay = (): void => setIsPlaying (true)
            
        audio.onpause = (): void => setIsPlaying (false)

        return (): void => {

            setIsPlaying (false)
        
        }
        
    }, [source, setIsPlaying])

    useEffect ((): void => {
        
        const audio: any = audioRef.current

        audio.playbackRate = speed
        
        const history = createBrowserHistory ()
            
        history.push (`${window.location.pathname}?speed=${audio.playbackRate}`)
        
    }, [speed])

    return (
        <>
            <KeyboardEventHandler
                handleKeys={['Space']}
                onKeyEvent={(): void|Promise<void> => switchPlayPause (audioRef.current)}
            />
            <div className="player-title">
                {title}
            </div>

            <div className="player-icons">
                <span
                    onClick={(): void => copyToClipboard (audioRef.current)}
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