import React from 'react'
import { SliderComponent } from '../../../../components'
import { useStore } from '../../../../store'

/**
 * @returns {React.ReactElement} react component
 */
export function SeekComponent () {

    const seek = useStore ((state) => state.seek)
    const setSeek = useStore ((state) => state.setSeek)
    const seekMax = useStore ((state) => state.seekMax)

    return (
        <>
            <SliderComponent
                min={0}
                max={seekMax}
                step={1}
                value={seek}
                onChange={(e) => setSeek (parseFloat (e.target.value))}
            />
        </>
    )

}