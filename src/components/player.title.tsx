import React, { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'
import { playerStateTitle } from './player.state'

export const PlayerTitle = (): ReactElement => {

    const title = useRecoilValue (playerStateTitle)

    return (
        <>
            <div className="player-title">
                {title}
            </div>
        </>
    )

}