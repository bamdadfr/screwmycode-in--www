import React, { ReactElement } from 'react'
import './player.indicators.styles.css'
import { useRecoilValue } from 'recoil'
import { playerStateSpeed } from './player.state'
import { PlayerSlider } from './player.slider'
import { PlayerIndicatorsPercent } from './player.indicators.percent'
import { PlayerIndicatorsSemiTone } from './player.indicators.semitone'

export const PlayerIndicators = (): ReactElement => {
    
    const speed = useRecoilValue (playerStateSpeed)

    return (
        <>
            <div className="controls">
                <div className="controls-item">
                    <PlayerIndicatorsPercent speed={speed} />
                </div>
                <div className="controls-item">
                    <PlayerIndicatorsSemiTone speed={speed} />
                </div>
            </div>
            <PlayerSlider />
        </>
    )

}