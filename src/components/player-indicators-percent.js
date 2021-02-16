import React from 'react'
import { PlayerIndicatorsBlueprint } from './player-indicators-blueprint'

export const PlayerIndicatorsPercent = (props) => {

    const { speed } = props
    const speedToPercent = () => (speed * 100 - 100).toFixed (1)

    return <PlayerIndicatorsBlueprint title='percent' value={speedToPercent ()}/>

}
