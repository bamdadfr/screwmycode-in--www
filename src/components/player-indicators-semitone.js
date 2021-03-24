import React from 'react'
import speedToSemitones from 'speed-to-semitones'
import { PlayerIndicatorsBlueprint } from './player-indicators-blueprint'

export const PlayerIndicatorsSemitone = (props) => {

    const { speed } = props

    return <PlayerIndicatorsBlueprint title='semitone' value={speedToSemitones (speed, 1)}/>

}