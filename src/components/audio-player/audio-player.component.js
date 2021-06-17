import React from 'react'
import { useRecoilValue } from 'recoil'
import { audioTitleAtom } from '@/atoms/audio-title.atom'

export default function AudioPlayerComponent () {

    const title = useRecoilValue (audioTitleAtom)

    return (
        <>
            {title}
        </>
    )

}