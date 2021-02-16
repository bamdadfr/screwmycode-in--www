import React from 'react'
import { PlayerIndicatorsBlueprint } from './player-indicators-blueprint'

export const PlayerIndicatorsSemitone = (props) => {

    const { speed } = props
    const speedToSemiTone = () => (12 * (Math.log (speed) / Math.log (2))).toFixed (1)

    return <PlayerIndicatorsBlueprint title='semitone' value={speedToSemiTone ()}/>

}

