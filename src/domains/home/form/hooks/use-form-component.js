import { useCallback } from 'react'
import SoundcloudScraper from 'soundcloud-scraper'
import ytdl from 'ytdl-core'
import { useRouter } from 'next/router'
import { useInput } from './use-input'
import { useInputRefocus } from './use-input-refocus'

/**
 * @function
 * @name useFormComponent
 * @returns {object} return value
 */
export function useFormComponent () {

    const router = useRouter ()
    const input = useInput ()

    useInputRefocus (input.ref)

    const handleSubmit = useCallback (async (e) => {

        e.preventDefault ()

        try {

            // soundcloud
            if (SoundcloudScraper.Util.validateURL (input.value)) {

                const userAndId = input.value.replace ('https://soundcloud.com/', '')
                const path = `/soundcloud/${userAndId}/1`

                await router.push (path)

                return

            }

            // youtube
            const id = ytdl.getURLVideoID (input.value)
            const path = `/youtube/${id}/1`

            await router.push (path)

        } catch {

            input.setValue ('')

        }

    })

    return {
        input,
        handleSubmit,
    }

}
