import { useEffect } from 'react'
import ReactHowler from 'react-howler'
import { useStore } from '../../../../../store/use-store'

/**
 * @param {object} howler react-howler instance (extends AudioContext)
 * @returns {number} seek position in seconds
 */
export function useHowlerSeek (howler) {

    const seek = useStore ((state) => state.seek)

    useEffect (() => {

        if (!(howler instanceof ReactHowler)) return

        howler.seek (seek)
    
    }, [howler, seek])

    return seek

}
