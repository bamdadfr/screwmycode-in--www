import React, { useEffect, useRef } from 'react'
import { useNativePlaybackRate } from './use-native-playback-rate'
import { useNativeLoop } from './use-native-loop'
import { useNativeToggleWithKeyboard } from './use-native-toggle-with-keyboard'
import { useNativeNoWarp } from './use-native-no-warp'
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
    const setIsLoaded = useStore ((state) => state.setIsLoaded)
    const { autoplay } = useNativeLoad (ref, url)

    useNativeLoop (ref)

    useNativeNoWarp (ref)

    useNativePlaybackRate (ref)

    useNativeToggleWithKeyboard (ref)

    useNativeVolume (ref)

    useEffect (() => {

        setTimeout (() => {

            setIsLoaded (true)

        }, 5)

    }, [setIsLoaded])

    return {
        ref,
        autoplay,
    }

}
