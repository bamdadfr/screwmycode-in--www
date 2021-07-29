import React, { useEffect, useRef, useState } from 'react'
import { Bar, BarColor, Handle, Slider } from './slider-new.component.styles'
import { getMyComputedStyle } from '../../../../utils'

/**
 * @returns {React.ReactElement} react component
 */
export function SliderNewComponent () {

    const [viewport, setViewport] = useState ()
    const ref = useRef (null)
    const [width, setWidth] = useState ()

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
                <BarColor value={width} />
                <Handle value={width}/>
            </Slider>
        </>
    )

}