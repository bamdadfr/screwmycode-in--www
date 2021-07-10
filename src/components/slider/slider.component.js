import React from 'react'
import { useRecoilState } from 'recoil'
import { speedAtom } from '../../atoms/speed.atom'
import { StyledSlider, StyledContainer } from './slider.styles'

/**
 * @function
 * @name SliderComponent
 * @description component: slider
 * @returns {React.ReactElement} - react component
 */
export default function SliderComponent () {

    const [speed, setSpeed] = useRecoilState (speedAtom)

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
                    aria-label="slider"
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