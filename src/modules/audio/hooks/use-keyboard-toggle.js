import { useEffect } from 'react'
import { useStore } from '../../../store/use-store'

/**
 * @param {string} keyCode keyboard code
 */
export function useKeyboardToggle (keyCode = 'Space') {

    const isPlaying = useStore ((state) => state.isPlaying)
    const play = useStore ((state) => state.play)
    const pause = useStore ((state) => state.pause)

    useEffect (() => {

        const handleKeyboard = (event) => {

            if (event.code === keyCode) {

                if (isPlaying) return pause ()

                play ()
            
            }
        
        }

        document.addEventListener ('keypress', handleKeyboard)

        return () => document.removeEventListener ('keypress', handleKeyboard)

    }, [isPlaying, keyCode, pause, play])

}
