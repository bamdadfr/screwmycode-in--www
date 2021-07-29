import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Bar, BarColor, Handle, Slider } from './slider.component.styles'
import { getMyComputedStyle, mapRange } from '../../utils'

const propTypes = {
    'min': PropTypes.number.isRequired,
    'max': PropTypes.number.isRequired,
    'value': PropTypes.number.isRequired,
}

/**
 * @param {object} props react props
 * @param {number} props.min min value
 * @param {number} props.max max value
 * @param {number} props.value value
 * @returns {React.ReactElement} react component
 */
export function SliderComponent ({
    min,
    max,
    value,
}) {

    const ref = useRef (null)
    const [viewport, setViewport] = useState ()
    const [width, setWidth] = useState ()
    const [bar, setBar] = useState ()
    const [handle, setHandle] = useState ()

    useEffect (() => {

        if (typeof width === 'undefined') return

        setBar (
            mapRange (
                parseFloat (value),
                parseFloat (min),
                parseFloat (max),
                12,
                parseFloat (width),
            ),
        )

        setHandle (
            mapRange (
                parseFloat (value),
                parseFloat (min),
                parseFloat (max),
                19,
                parseFloat (width),
            ),
        )

    }, [value, min, max, width])

    useEffect (() => {

        const handleResize = () => setViewport ({
            'height': window.innerHeight,
            'width': window.innerWidth,
        })

        window.addEventListener ('resize', handleResize)

        return () => window.removeEventListener ('resize', handleResize)

    }, [])

    useEffect (() => {

        setWidth (getMyComputedStyle (ref, 'width'))

    }, [viewport])

    return (
        <>
            <Slider ref={ref}>
                <Bar/>
                <BarColor value={bar} />
                <Handle value={handle}/>
            </Slider>
        </>
    )

}

SliderComponent.propTypes = propTypes