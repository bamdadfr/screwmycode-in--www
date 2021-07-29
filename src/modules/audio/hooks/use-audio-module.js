import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useStore } from '../../../store'
import { replaceNextRoute } from '../utils'
import { useCache } from './use-cache'

const providers = {
    'youtube': 'YouTube',
    'soundcloud': 'SoundCloud',
}

/**
 * @description main hook used by player.module
 */
export function useAudioModule () {

    const router = useRouter ()
    const speed = useStore ((state) => state.speed)
    const audioTitle = useStore ((state) => state.audioTitle)
    const cachedSpeed = useCache (speed, 350)

    // replace route
    useEffect (() => {

        const provider = providers[router.pathname.split ('/')[1]]

        replaceNextRoute (
            'speed',
            cachedSpeed.toString (),
            audioTitle
                ? `${audioTitle} - ${cachedSpeed} - ${provider} - ScrewMyCode.In`
                : undefined,
        )
    
    }, [audioTitle, cachedSpeed, router.pathname])

}
