import React, { ReactElement } from 'react'
import { IPlayerIndicatorsSemiTone } from './player.indicators.types'
import { PlayerIndicatorsBlueprint } from './player.indicators.blueprint'

export const PlayerIndicatorsSemiTone = (props: IPlayerIndicatorsSemiTone): ReactElement => {
    
    const { speed } = props
    const speedToSemiTone = (): string => (12 * (Math.log (speed) / Math.log (2))).toFixed (1)
    
    return <PlayerIndicatorsBlueprint text='semitone' value={speedToSemiTone ()} />

}

