import React from 'react'
import { SliderComponent } from '../../../../components/slider/slider.component'
import { useStore } from '../../../../store/use-store'

/**
 * @returns {React.ReactElement} react component
 */
export function SeekComponent () {

    const progress = useStore ((state) => state.progress)
    const duration = useStore ((state) => state.duration)
    const setSeek = useStore ((state) => state.setSeek)

    return (
        <>
            <SliderComponent
                name="seek slider"
                min={0}
                max={duration}
                step={1}
                value={progress}
                onChange={(e) => setSeek (Math.floor (e.target.value))}
            />
        </>
    )

}