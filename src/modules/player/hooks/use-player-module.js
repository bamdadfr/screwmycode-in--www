import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useStore } from '../../../hooks'
import { replaceNextRoute } from '../utils'

const providers = {
    'youtube': 'YouTube',
    'soundcloud': 'SoundCloud',
}

/**
 *
 */
export function usePlayerModule () {

    const router = useRouter ()
    const speed = useStore ((state) => state.speed)
    const audioTitle = useStore ((state) => state.audioTitle)

    useEffect (() => {

        const provider = providers[router.pathname.split ('/')[1]]

        replaceNextRoute (
            'speed',
            speed.toString (),
            audioTitle ? `${audioTitle} - ${speed} - ${provider} - ScrewMyCode.In` : undefined,
        )
    
    }, [speed])

}
