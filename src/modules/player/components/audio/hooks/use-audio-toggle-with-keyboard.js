import React, { useEffect } from 'react'

/**
 * @param {React.Ref} ref audio ref
 * @param {string} keyCode keyboard code
 */
export function useAudioToggleWithKeyboard (ref, keyCode = 'Space') {

    useEffect (() => {

        const handleKeyboard = (event) => {

            if (event.code === keyCode) {

                const audio = ref.current

                if (audio.paused) {

                    audio.play ()

                    return
                
                }

                audio.pause ()
            
            }
        
        }

        document.addEventListener ('keypress', handleKeyboard)

        return () => {

            document.removeEventListener ('keypress', handleKeyboard)
        
        }
    
    }, [keyCode, ref])

}
