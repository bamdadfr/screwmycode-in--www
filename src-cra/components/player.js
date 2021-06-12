import React from 'react'
import './player.css'
import { PlayerIndicators } from './player-indicators'
import { PlayerIcons } from './player-icons'
import { PlayerTitle } from './player-title'
import { PlayerEvents } from './player-events'
import { PlayerElement } from './player-element'

export const Player = () => (
    <>
        <PlayerEvents/>
        <PlayerTitle/>
        <PlayerIcons/>
        <PlayerElement/>
        <PlayerIndicators/>
    </>
)

