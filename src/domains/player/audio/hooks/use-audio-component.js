import React, { useRef } from 'react'
import { useAudioPlaybackRate } from './use-audio-playback-rate'
import { useAudioLoop } from './use-audio-loop'
import { useAudioToggleWithKeyboard } from './use-audio-toggle-with-keyboard'
import { useAudioNoWarp } from './use-audio-no-warp'
import { useAudioVolume } from './use-audio-volume'
import { useAudioLoad } from './use-audio-load'

/**
 * @function
 * @name useAudioComponent
 * @param {string} url - audio url
 * @typedef {React.Ref} Ref
 * @typedef {boolean} Autoplay
 * @returns {{Ref, Autoplay}} audio attributes
 */
export function useAudioComponent (url) {

    if (typeof url === 'undefined') return

    const ref = useRef (null)
    const { autoplay } = useAudioLoad (ref, url)

    useAudioLoop (ref)

    useAudioNoWarp (ref)

    useAudioPlaybackRate (ref)

    useAudioToggleWithKeyboard (ref)

    useAudioVolume (ref)

    return {
        ref,
        autoplay,
    }

}
