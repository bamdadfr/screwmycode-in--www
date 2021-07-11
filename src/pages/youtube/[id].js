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
 * @description next.js convention
 * @param {*} context - next.js context
 * @returns {object.<string, string>} - props to pass
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