import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { isRepeatingAtom } from '../../../../../atoms/repeat.atoms'

/**
 * @param {HTMLAudioElement} audio element
 */
export function useNativeLoop (audio) {

    const [isRepeating] = useAtom (isRepeatingAtom)

    useEffect (() => {

        if (!(audio instanceof HTMLAudioElement)) return

        audio.loop = isRepeating
    
    }, [audio, isRepeating])

}