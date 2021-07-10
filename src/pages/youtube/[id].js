import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'

const propTypes = {
    'id': PropTypes.string.isRequired,
    'speed': PropTypes.string.isRequired,
}

/**
 * @function
 * @name OldYoutubePage
 * @description /youtube/:id?speed=x
 *      redirect to new path
 *      /youtube/:id/:speed
 * @param {*} props - props from next.js
 * @param {string} props.id - id
 * @param {string} props.speed - speed
 * @returns {React.ReactElement} - react component
 */
export default function OldYoutubePage ({ id, speed }) {

    const router = useRouter ()

    /**
     * @function
     * @name onMount
     * @description redirect to new app path
     */
    async function onMount () {

        await router.push (`/youtube/${id}/${speed}`)

    }

    useEffect (onMount, [])

    return (
        <>
            This is the old path. Redirecting...
        </>
    )

}

OldYoutubePage.propTypes = propTypes

/**
 * @function
 * @name getServerSideProps
 * @description next.js convention
 * @param {*} context - next.js context
 * @returns {object.<string, string>} - props to pass
 */
export function getServerSideProps (context) {

    const { id } = context.params
    const speed = context.query.speed || '1'

    return {
        'props': {
            id,
            speed,
        },
    }

}