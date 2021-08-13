import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { setLoadedAtom } from '../../../atoms/load.atoms'
import { setSeekAtom } from '../../../atoms/seek.atoms'
import { setProgressAtom } from '../../../atoms/progress.atoms'

/**
 * @description set initial loading state for audio player
 */
export function usePlayerLoading () {

    const [, setLoaded] = useAtom (setLoadedAtom)
    const [, setSeek] = useAtom (setSeekAtom)
    const [, setProgress] = useAtom (setProgressAtom)

    useEffect (() => setSeek (0), [setSeek])

    useEffect (() => setProgress (0), [setProgress])

    useEffect (() => setLoaded (false), [setLoaded])

}