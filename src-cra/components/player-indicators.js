import React from 'react'
import './player-indicators.css'
import { useRecoilValue } from 'recoil'
import { playerStateSpeed } from './player-state'
import { PlayerSlider } from './player-slider'
import { PlayerIndicatorsPercent } from './player-indicators-percent'
import { PlayerIndicatorsSemitone } from './player-indicators-semitone'

export const PlayerIndicators = () => {

    const speed = useRecoilValue (playerStateSpeed)

    return (
        <>
            <div className="controls">
                <div className="controls-item">
                    <PlayerIndicatorsPercent speed={speed}/>
                </div>
                <div className="controls-item">
                    <PlayerIndicatorsSemitone speed={speed}/>
                </div>
            </div>
            <PlayerSlider/>
        </>
    )

}