import React, { useState } from 'react'
import { useInterval } from '../../../../hooks/use-interval'

/**
 * @param {object} props react props
 * @param {number} props.frequency setInterval delay
 * @returns {React.ReactElement} react component
 */
export function DotsComponent ({
    frequency = 500,
}) {

    const [dots, setDots] = useState ('')

    useInterval (() => {

        if (dots === '...') return setDots ('')

        setDots ((s) => s + '.')

    }, frequency)

    return (
        <>
            {dots}
        </>
    )

}