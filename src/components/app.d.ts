/* eslint-disable */
declare module '*.svg'

// https://github.com/linsight/react-keyboard-event-handler/issues/20#issuecomment-664683731
declare module 'react-keyboard-event-handler' {
    // import React from 'react'
    // export const KeyboardEventHandler: React.SFC<{
    //     handleKeys?: string[];
    //     onKeyEvent: { (key: string, e: React.KeyboardEvent): void; };
    // }>

    const KeyboardEventHandler: any

    export default KeyboardEventHandler
}