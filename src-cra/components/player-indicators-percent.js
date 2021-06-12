import React from 'react'
import speedToPercentage from 'speed-to-percentage'
import { PlayerIndicatorsBlueprint } from './player-indicators-blueprint'

export const PlayerIndicatorsPercent = (props) => {

    const { speed } = props

    return <PlayerIndicatorsBlueprint title='percent' value={speedToPercentage (speed, 1)}/>

}
