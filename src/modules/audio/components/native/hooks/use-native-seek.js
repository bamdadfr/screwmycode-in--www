import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { seekAtom } from '../../../../../atoms/seek.atoms'

/**
 * @param {HTMLAudioElement} audio audio element
 */
export function useNativeSeek (audio) {

    const [seek] = useAtom (seekAtom)

    useEffect (() => {

        if (!(audio instanceof HTMLAudioElement)) return

        audio.currentTime = seek

    }, [audio, seek])

}