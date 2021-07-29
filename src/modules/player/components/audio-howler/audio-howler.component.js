import React, { useEffect, useRef } from 'react'
import ReactHowler from 'react-howler'
import { useStore } from '../../../../store'

/**
 * @param {object} props react props
 * @param {string} props.url audio url
 * @returns {React.ReactElement} react component
 */
export function AudioHowlerComponent ({ url }) {

    const proxy = useRef ('http://localhost:8080/') // https://screwmycode-in--cors.herokuapp.com/
    const speed = useStore ((state) => state.speed)
    const howler = useRef (null)

    useEffect (() => {

        howler.current.rate (speed)
    
    }, [speed])

    return (
        <>
            <ReactHowler
                ref={howler}
                src={proxy.current + url}
                playing
                rate={0.5}
                format={['mp3']}
                onLoad={() => console.log ('lol')}
            />
        </>
    )

}