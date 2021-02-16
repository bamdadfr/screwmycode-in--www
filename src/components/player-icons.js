import React from 'react'
import { useRecoilValue } from 'recoil'
import { playerStateSpeed } from './player-state'
import { PlayerUtilsCopyToClipboard } from './player-utils'
import { IconShare } from './icons'

export const PlayerIcons = () => {

    const speed = useRecoilValue (playerStateSpeed)

    return (
        <>
            <div className="player-icons">
                <span
                    onClick={() => PlayerUtilsCopyToClipboard (speed)}
                    onKeyDown={() => undefined}
                    role="button"
                    tabIndex={-1}
                >
                    <img
                        src={IconShare}
                        alt="player-icon-share"
                        className="player-icon-share"
                    />
                </span>
            </div>
        </>
    )

}

