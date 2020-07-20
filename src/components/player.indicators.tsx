import React, { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'
import './player.indicators.styles.css'
import { playerStateSpeed } from './player.state'
import { PlayerSlider } from './player.slider'
import { IPlayerIndicatorsElementsPercent, IPlayerIndicatorsElementsSemiTone } from './player.indicators.types'

export const PlayerIndicators = (): ReactElement => {
    
    const speed = useRecoilValue (playerStateSpeed)

    return (
        <>
            <div className="controls">
                <div className="controls-item">
                    <PlayerIndicatorsElementsPercent speed={speed} />
                </div>
                <div className="controls-item">
                    <PlayerIndicatorsElementsSemiTone speed={speed} />
                </div>
            </div>
            <PlayerSlider />
        </>
    )

}

const PlayerIndicatorsBlueprint = (props: any): ReactElement => {

    const { title, value } = props

    return (
        <>
            {title}
            <form>
                <input
                    disabled
                    type="text"
                    value={value}
                />
            </form>
        </>
    )

}

const PlayerIndicatorsElementsPercent = (props: IPlayerIndicatorsElementsPercent): ReactElement => {
    
    const { speed } = props
    const speedToPercent = (): string => (speed * 100 - 100).toFixed (1)

    return <PlayerIndicatorsBlueprint text='percent' value={speedToPercent ()} />
    
}

const PlayerIndicatorsElementsSemiTone = (props: IPlayerIndicatorsElementsSemiTone): ReactElement => {
    
    const { speed } = props
    const speedToSemiTone = (): string => (12 * (Math.log (speed) / Math.log (2))).toFixed (1)
    
    return <PlayerIndicatorsBlueprint text='semitone' value={speedToSemiTone ()} />

}