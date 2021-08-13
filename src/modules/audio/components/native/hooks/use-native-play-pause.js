import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { isPlayingAtom } from '../../../../../atoms/play-pause.atoms'

/**
 * @param {HTMLAudioElement} audio element
 */
export function useNativePlayPause (audio) {

    const [isPlaying] = useAtom (isPlayingAtom)

    useEffect (() => {

        if (!(audio instanceof HTMLAudioElement)) return

        if (isPlaying) return audio.play ()

        audio.pause ()

    }, [isPlaying, audio])

}