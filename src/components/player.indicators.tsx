import React, { ReactElement, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import './player.indicators.styles.css'
import { playerStateSpeed } from './player.state'
import { PlayerSlider } from './player.slider'
import { IPlayerIndicatorsElementsPercent, IPlayerIndicatorsElementsSemiTone } from './player.indicators.types'

export const PlayerIndicators = (): ReactElement => {
    
    const speed = useRecoilValue (playerStateSpeed)

    return (
        <>
            <div className="controls">
                <div className="controls-item">
                    <PlayerIndicatorsElementsPercent speed={speed} />
                </div>
                <div className="controls-item">
                    <PlayerIndicatorsElementsSemiTone speed={speed} />
                </div>
            </div>
            <PlayerSlider />
        </>
    )

}

const PlayerIndicatorsElementsPercent = (props: IPlayerIndicatorsElementsPercent): ReactElement => {
    
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

const PlayerIndicatorsElementsSemiTone = (props: IPlayerIndicatorsElementsSemiTone): ReactElement => {

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