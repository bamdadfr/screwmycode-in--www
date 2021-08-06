import React from 'react'
import { SliderComponent } from '../../../../components/slider/slider.component'
import { useStore } from '../../../../store/use-store'

/**
 * @returns {React.ReactElement} react component
 */
export function VolumeSliderComponent () {

    const volume = useStore ((state) => state.volume)
    const setVolume = useStore ((state) => state.setVolume)

    return (
        <>
            <SliderComponent
                name="volume slider"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => setVolume (e.target.value)}
            />
        </>
    )

}