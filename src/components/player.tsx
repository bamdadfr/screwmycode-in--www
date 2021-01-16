import React, { ReactElement } from 'react'
import './player.styles.css'
import { PlayerIndicators } from './player.indicators'
import { PlayerIcons } from './player.icons'
import { PlayerTitle } from './player.title'
import { PlayerEvents } from './player.events'
import { PlayerElement } from './player.element'

export const Player = (): ReactElement => (
    <>

        <PlayerEvents />
            
        <PlayerTitle />

        <PlayerIcons />

        <PlayerElement />

        <PlayerIndicators />

    </>
)

