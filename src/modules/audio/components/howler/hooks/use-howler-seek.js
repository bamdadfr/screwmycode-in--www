import { useEffect } from 'react'
import { useStore } from '../../../../../store'

/**
 * @param {object} howler react-howler instance (extends AudioContext)
 */
export function useHowlerSeek (howler) {

    const seek = useStore ((state) => state.seek)

    useEffect (() => {

        if (howler !== null) {

            howler.seek (seek)
        
        }
    
    }, [howler, seek])

}
