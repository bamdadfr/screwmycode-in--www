import { useCallback } from 'react'
import SoundcloudScraper from 'soundcloud-scraper'
import ytdl from 'ytdl-core'
import { useRouter } from 'next/router'
import { useInput } from './use-input'
import { useInputRefocus } from './use-input-refocus'

/**
 * @typedef {useInput} Link
 * @typedef {Function} HandleSubmit
 * @returns {{Link, HandleSubmit}} form attributes
 */
export function useFormComponent () {

    const router = useRouter ()
    const link = useInput ()

    useInputRefocus (link.ref)

    const handleSubmit = useCallback (async (e) => {

        e.preventDefault ()

        try {

            // soundcloud
            if (SoundcloudScraper.Util.validateURL (link.value)) {

                const userAndId = link.value.replace ('https://soundcloud.com/', '')
                const path = `/soundcloud/${userAndId}/1`

                await router.push (path)

                return

            }

            // youtube
            const id = ytdl.getURLVideoID (link.value)
            const path = `/youtube/${id}/1`

            await router.push (path)

        } catch {

            link.resetValue ()

        }

    }, [link])

    return {
        link,
        handleSubmit,
    }

}
