import { useEffect, useState } from 'react'

/**
 * @description check if client has autoplay enabled (settings enabled or already interacted with app)
 * @returns {{boolean}} autoplay
 */
export function useAutoplay () {

    const [autoplay, setAutoplay] = useState (false)

    useEffect (() => {

        (async () => {

            // https://github.com/video-dev/can-autoplay/issues/36
            import ('can-autoplay')
                .then ((module) => module.default.video ())
                .then (({ result }) => {

                    if (result === true) {

                        setAutoplay (true)

                    } else {

                        setAutoplay (false)

                    }

                })

        }) ()

    }, [])

    return { autoplay }

}
