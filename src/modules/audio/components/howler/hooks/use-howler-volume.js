import { useEffect } from 'react'
import ReactHowler from 'react-howler'
import { useAtom } from 'jotai'
import { volumeAtom } from '../../../../../atoms/volume.atoms'

/**
 * @param {object} howler react-howler instance (extends AudioContext)
 * @returns {number} volume
 */
export function useHowlerVolume (howler) {
    
    const [volume] = useAtom (volumeAtom)

    useEffect (() => {

        if (!(howler instanceof ReactHowler)) return

        howler.volume (volume)
    
    }, [howler, volume])

    return volume

}