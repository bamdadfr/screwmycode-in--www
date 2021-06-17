import React from 'react'
import { useRecoilValue } from 'recoil'
import speedToPercentage from 'speed-to-percentage'
import speedToSemitones from 'speed-to-semitones'
import { audioSpeedAtom } from '@/atoms/audio-speed.atom'
import { StyledContainer } from './audio-indicators.styles'

export default function AudioIndicatorsComponent () {

    const speed = useRecoilValue (audioSpeedAtom)

    return (
        <>
            <StyledContainer>
                <div>
                    percent
                    <input
                        disabled
                        type="text"
                        value={speedToPercentage (speed, 1)}
                    />
                </div>
                <div>
                    semitone
                    <input
                        disabled
                        type="text"
                        value={speedToSemitones (speed, 1)}
                    />
                </div>
            </StyledContainer>
        </>
    )

}