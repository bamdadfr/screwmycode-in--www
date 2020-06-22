import React, { useRef, useState, useEffect, ReactElement } from 'react'

interface IProps {
    init: number,
    speedCB: any,
}

export default (props: IProps): React.ReactElement => {

    const { speedCB, init } = props
    const [speedState, setSpeedState] = useState<any> (init)

    const speed = {
        'state': {
            'get': speedState,
            'set': setSpeedState,
        },
        'callback': speedCB,
    }

    const percent = {
        'ref': useRef<any> (null),
        'get': (): string => (speed.state.get * 100 - 100).toFixed (1),
        'JSX': (): ReactElement => (
            <>
                percent
                <form>
                    <input
                        disabled
                        ref={percent.ref}
                        type="text"
                        value={percent.get ()}
                    />
                </form>
            </>
        ),
    }

    const tone = {
        'ref': useRef<any> (null),
        'get': (): string => (12 * (Math.log (speed.state.get) / Math.log (2))).toFixed (1),
        'JSX': (): ReactElement => (
            <>
                semitone
                <form>
                    <input
                        disabled
                        ref={tone.ref}
                        type="text"
                        value={tone.get ()}
                    />
                </form>
            </>
        ),
    }

    useEffect (() => {

        speed.callback (speed.state.get)
    
    }, [speed])

    return (
        <>
            <div className="controls">
                <div className="controls-item">
                    <percent.JSX />
                </div>
                <div className="controls-item">
                    <tone.JSX />
                </div>
            </div>
            <div className="controls-slider">
                <input
                    type="range"
                    min="0.5"
                    max="1.5"
                    step="0.001"
                    value={speed.state.get}
                    onChange={(e): any => speed.state.set (e.target.value)}
                />
            </div>
        </>
    )

}
