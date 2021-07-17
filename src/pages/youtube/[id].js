import React from 'react'

/**
 * @param {object} context next.js context
 * @returns {object.<string, string>} redirect
 */
export function getServerSideProps (context) {

    const { id, speed } = context.params
    const props = {}

    props.id = id

    props.speed = parseFloat (speed) || 1

    return {
        'redirect': {
            'destination': `/youtube/${props.id}/${props.speed.toString ()}`,
            'permanent': true,
        },
    }

}

/**
 * @description redirection for the old youtube page
 *      /youtube/[id]?speed=x => /youtube/[id]/[speed]
 * @returns {React.ReactElement} react component
 */
export default function OldYoutubePage () {

    return <></>

}