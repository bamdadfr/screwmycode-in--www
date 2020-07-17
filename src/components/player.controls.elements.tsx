import React, { useRef, ReactElement } from 'react'
import { IPlayerControlsElementsPercent, IPlayerControlsElementsSemiTone } from './player.controls.types'

export const PlayerControlsElementsPercent = (props: IPlayerControlsElementsPercent): ReactElement => {
    
    const { speed } = props
    const ref = useRef<any> (null)
    const speedToPercent = (): string => (speed * 100 - 100).toFixed (1)

    return (
        <>
            percent
            <form>
                <input
                    disabled
                    ref={ref}
                    type="text"
                    value={speedToPercent ()}
                />
            </form>
        </>
    )

}

export const PlayerControlsElementsSemiTone = (props: IPlayerControlsElementsSemiTone): ReactElement => {

    const { speed } = props
    const ref = useRef<any> (null)
    const speedToSemiTone = (): string => (12 * (Math.log (speed) / Math.log (2))).toFixed (1)

    return (
        <>
            semitone
            <form>
                <input
                    disabled
                    ref={ref}
                    type="text"
                    value={speedToSemiTone ()}
                />
            </form>
        </>
    )

}