import React, { ReactElement } from 'react'
import { IconChamp } from './icons'

export const RoutesLoading = (): ReactElement => {
    
    return (
        <div className="player">
            <img
                src={IconChamp}
                alt="icon-loading"
                height={150}
            />
        </div>

    )

}