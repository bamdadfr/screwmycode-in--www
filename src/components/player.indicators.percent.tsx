import React, { ReactElement } from 'react'
import { IPlayerIndicatorsPercent } from './player.indicators.types'
import { PlayerIndicatorsBlueprint } from './player.indicators.blueprint'

export const PlayerIndicatorsPercent = (props: IPlayerIndicatorsPercent): ReactElement => {
    
    const { speed } = props
    const speedToPercent = (): string => (speed * 100 - 100).toFixed (1)

    return <PlayerIndicatorsBlueprint title='percent' value={speedToPercent ()} />
    
}
