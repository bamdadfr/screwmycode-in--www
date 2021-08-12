import React, { useRef } from 'react'
import { useAtom } from 'jotai'
import { useHowlerDuration } from './use-howler-duration'
import { useHowlerSpeed } from './use-howler-speed'
import { useHowlerVolume } from './use-howler-volume'
import { useHowlerProgress } from './use-howler-progress'
import { useHowlerSeek } from './use-howler-seek'
import { useHowlerEnd } from './use-howler-end'
import { setLoadedAtom } from '../../../../../atoms/load.atoms'
import { isPlayingAtom } from '../../../../../atoms/play-pause.atoms'
import { isRepeatingAtom } from '../../../../../atoms/repeat.atoms'

/**
 * @typedef {React.Ref} Ref react-howler component
 * @typedef {Function} SetIsLoaded
 * @typedef {boolean} IsPlaying
 * @typedef {boolean} IsRepeat
 * @typedef {number} Speed initial value for first DOM render
 * @typedef {number} Volume initial value for first DOM render
 * @typedef {Function} HandleEnd callback function
 * @returns {{Ref,SetIsLoaded,IsPlaying,IsRepeat,Speed,Volume,HandleEnd}} component state
 */
export function useHowlerComponent () {

    const ref = useRef (null)
    const [, setLoaded] = useAtom (setLoadedAtom)
    const [isPlaying] = useAtom (isPlayingAtom)
    const [isRepeating] = useAtom (isRepeatingAtom)
    const speed = useHowlerSpeed (ref.current)
    const volume = useHowlerVolume (ref.current)

    useHowlerDuration (ref.current)

    useHowlerProgress (ref.current)

    useHowlerSeek (ref.current)

    const handleEnd = useHowlerEnd ()

    return {
        ref,
        setLoaded,
        isPlaying,
        isRepeating,
        speed,
        volume,
        handleEnd,
    }

}