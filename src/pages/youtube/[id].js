import React from 'react'

/**
 * @function
 * @name OldYoutubePage
 * @description /youtube/[id]?speed=x
 *      redirect to new path
 *      /youtube/[id]/[speed]
 * @returns {React.ReactElement} - react component
 */
export default function OldYoutubePage () {

    return (
        <></>
    )

}

/**
 * @function
 * @name getServerSideProps
 * @description parse url parameters and redirect
 * @param {*} context - next.js context
 * @returns {object.<string, string>} - redirect
 */
export function getServerSideProps (context) {

    const { id } = context.params
    const speed = context.query.speed || '1'

    return {
        'redirect': {
            'destination': `/youtube/${id}/${speed}`,
            'permanent': true,
        },
    }

}