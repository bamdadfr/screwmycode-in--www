import React, { useState, useEffect, ReactElement } from 'react'
import { PlayerControlsElementsPercent, PlayerControlsElementsSemiTone } from './player.controls.elements'
import { IPlayerControlsProps } from './player.controls.types'
import './player.controls.styles.css'

export const PlayerControls = (props: IPlayerControlsProps): ReactElement => {

    const { speedCallback, init } = props
    const [speed, setSpeed] = useState<number> (init)

    useEffect (() => {

        speedCallback (speed)
    
    }, [speed])

    return (
        <>
            <div className="controls">
                <div className="controls-item">
                    <PlayerControlsElementsPercent speed={speed} />
                </div>
                <div className="controls-item">
                    <PlayerControlsElementsSemiTone speed={speed} />
                </div>
            </div>
            <div className="controls-slider">
                <input
                    type="range"
                    min="0.5"
                    max="1.5"
                    step="0.001"
                    value={speed}
                    onChange={(e): void => setSpeed (parseFloat (e.target.value))}
                />
            </div>
        </>
    )

}
