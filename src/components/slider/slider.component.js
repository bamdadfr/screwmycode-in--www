import React from 'react'
import { useRecoilState } from 'recoil'
import { audioSpeedAtom } from '@/atoms/audio-speed.atom'
import { StyledSlider, StyledContainer } from './slider.styles'

/**
 * @function
 * @name SliderComponent
 * @description component: slider
 * @returns {React.ReactNode} - react component
 */
export default function SliderComponent () {

    const [speed, setSpeed] = useRecoilState (audioSpeedAtom)

    /**
     * @function
     * @name onChange
     * @description handle when slider value is changed
     * @param {string} value - value coming from DOM as string
     * @returns {React.ComponentState} - react component state (actually recoil)
     */
    function onChange (value) {

        const number = parseFloat (value)

        if (number <= 0.5) return setSpeed (0.5)

        if (number >= 1.5) return setSpeed (1.5)

        return setSpeed (number)

    }

    return (
        <>
            <StyledContainer>
                <StyledSlider
                    type="range"
                    min={0.5}
                    max={1.5}
                    step={0.005}
                    value={speed}
                    onChange={(e) => onChange (e.target.value)}
                />
            </StyledContainer>
        </>
    )

}