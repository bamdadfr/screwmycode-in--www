// noinspection JSUnusedGlobalSymbols

import React from 'react'

/**
 * @description redirection for the old youtube page
 *      /youtube/[id]?speed=x => /youtube/[id]/[speed]
 * @returns {React.ReactElement} react component
 */
export default function OldYoutubePage () {

    return <></>

}

/**
 * @param {object} context next.js context
 * @returns {object} next.js redirection object
 */
export function getServerSideProps (context) {

    const { id } = context.params
    const { speed } = context.query
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