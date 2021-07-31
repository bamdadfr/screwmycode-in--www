import { useEffect } from 'react'
import { useStore } from '../../../../../store'

/**
 * @param {object} howler react-howler instance (extends AudioContext)
 */
export function useHowlerProgress (howler) {

    const isPlaying = useStore ((state) => state.isPlaying)
    const setProgress = useStore ((state) => state.setProgress)
    const fps = 10

    useEffect (() => {

        let i1 = undefined

        if (howler !== null && isPlaying) {

            i1 = setInterval (() => {

                setProgress (Math.floor (howler.seek ()))
            
            }, 1000 / fps)

            return () => clearInterval (i1)
        
        }
    
    }, [howler, isPlaying, setProgress])

}
