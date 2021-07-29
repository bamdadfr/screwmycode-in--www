import React, { useEffect, useRef } from 'react'
import { useNativePlaybackRate } from './use-native-playback-rate'
import { useNativeLoop } from './use-native-loop'
import { useNativePitch } from './use-native-pitch'
import { useNativeVolume } from './use-native-volume'
import { useNativeLoad } from './use-native-load'
import { useStore } from '../../../../../store'

/**
 * @param {string} url audio url
 * @typedef {React.Ref} Ref
 * @typedef {boolean} Autoplay
 * @returns {{Ref, Autoplay}} audio attributes
 */
export function useNativeComponent (url) {

    const ref = useRef (null)

    useNativeLoad (ref, url)

    useNativeLoop (ref)

    useNativePitch (ref)

    useNativePlaybackRate (ref)

    useNativeVolume (ref)

    const isPlaying = useStore ((state) => state.isPlaying)

    useEffect (() => {

        if (isPlaying) return ref.current.play ()

        ref.current.pause ()
    
    }, [isPlaying])

    return { ref }

}
