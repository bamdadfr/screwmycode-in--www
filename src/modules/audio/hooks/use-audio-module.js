import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useStore } from '../../../store/use-store'
import { replaceNextRoute } from '../utils/replace-next-route'
import { useCache } from './use-cache'
import { useKeyboardToggle } from './use-keyboard-toggle'

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

    useKeyboardToggle ('Space')

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
