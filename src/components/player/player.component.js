import React from 'react'
import { useRecoilValue } from 'recoil'
import { audioTitleAtom } from '@/atoms/audio-title.atom'

export default function PlayerComponent () {

    const title = useRecoilValue (audioTitleAtom)

    return (
        <>
            {title}
        </>
    )

}