import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useAtom } from 'jotai'
import { isLoadedAtom } from '../../../atoms/load.atoms'
import { setSpeedAtom } from '../../../atoms/speed.atoms'
import { setAudioTitleAtom } from '../../../atoms/audio-title.atoms'
import { getProvider } from '../../../utils/get-provider/get-provider'
import { usePlayerLoading } from './use-player-loading'

/**
 * @param {object} options options
 * @param {string} options.title audio title
 * @param {number} options.speed audio speed
 * @typedef {string} MetaDescription
 * @typedef {string} MetaUrl
 * @typedef {boolean} IsLoaded
 * @returns {{MetaDescription,MetaUrl,IsLoaded}} component state
 */
export function usePlayerLayout ({
    title,
    speed,
}) {

    const router = useRouter ()
    const [isLoaded] = useAtom (isLoadedAtom)
    const [, setSpeed] = useAtom (setSpeedAtom)
    const [, setAudioTitle] = useAtom (setAudioTitleAtom)
    const [metaDescription] = useState (`${title} - ${speed} - ${getProvider (router)} - ScrewMyCode.In`)
    const metaUrl = 'https://www.screwmycode.in/' + router.asPath

    usePlayerLoading ()

    useEffect (() => setSpeed (speed), [setSpeed, speed])

    useEffect (() => setAudioTitle (title), [setAudioTitle, title])

    return {
        metaDescription,
        metaUrl,
        isLoaded,
    }

}