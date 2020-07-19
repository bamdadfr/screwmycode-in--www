import React, { ReactElement } from 'react'
import { useRecoilState } from 'recoil'
import { PlayerControlsElementsPercent, PlayerControlsElementsSemiTone } from './player.controls.elements'
import './player.controls.styles.css'
import { playerStateSpeed } from './player.state'

export const PlayerControls = (): ReactElement => {

    // const { player, setStatePlayerSpeed } = props
    const [speed, setSpeed] = useRecoilState (playerStateSpeed)

    const onChange = (value: string): void => {

        const number = parseFloat (value)
        
        if (number <= 0.5) {

            setSpeed (0.5)
        
        } else if (number >= 1.5) {

            setSpeed (1.5)
        
        } else {

            setSpeed (number)
        
        }
    
    }

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
                    onChange={(e): void => onChange (e.target.value)}
                />
            </div>
        </>
    )

}