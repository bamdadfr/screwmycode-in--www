import React from 'react'
import { useRecoilState } from 'recoil'
import './player-slider.css'
import { playerStateSpeed } from './player-state'

export const PlayerSlider = () => {

    const [speed, setSpeed] = useRecoilState (playerStateSpeed)

    const onChange = (value) => {

        const number = parseFloat (value)

        if (number <= 0.5) return setSpeed (0.5)

        if (number >= 1.5) return setSpeed (1.5)

        return setSpeed (number)

    }

    return (
        <div className="controls-slider">
            <input
                type="range"
                min="0.5"
                max="1.5"
                step="0.001"
                value={speed}
                onChange={(e) => onChange (e.target.value)}
            />
        </div>
    )

}
