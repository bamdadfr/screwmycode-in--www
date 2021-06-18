import React, { useEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { audioUrlAtom } from '@/atoms/audio-url.atom'

export default function PlayerComponent () {

    const ref = useRef (null)
    const url = useRecoilValue (audioUrlAtom)

    useEffect (() => {

        console.log (ref)
    
    }, [])

    return (
        <>
            <audio className="w-100" ref={ref} controls>
                <track kind="captions"/>
            </audio>
        </>
    )

}