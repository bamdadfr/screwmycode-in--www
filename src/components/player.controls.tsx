import React, { ReactElement } from 'react'
import { PlayerControlsElementsPercent, PlayerControlsElementsSemiTone } from './player.controls.elements'
import { IPlayerControlsProps } from './player.controls.types'
import './player.controls.styles.css'
import { stateMap } from './state.map'

export const PlayerControls = stateMap ((props: IPlayerControlsProps|any): ReactElement => {

    const { player, setStatePlayerSpeed } = props

    return (
        <>
            <div className="controls">
                <div className="controls-item">
                    <PlayerControlsElementsPercent speed={player.speed} />
                </div>
                <div className="controls-item">
                    <PlayerControlsElementsSemiTone speed={player.speed} />
                </div>
            </div>
            <div className="controls-slider">
                <input
                    type="range"
                    min="0.5"
                    max="1.5"
                    step="0.001"
                    value={player.speed}
                    onChange={(e): void => setStatePlayerSpeed (parseFloat (e.target.value))}
                />
            </div>
        </>
    )

})