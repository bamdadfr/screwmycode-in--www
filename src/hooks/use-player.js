import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { playerIsLoadedAtom } from '@/atoms/player-is-loaded.atom'
import axios from 'axios'
import { Howl } from 'howler'
import { audioSpeedAtom } from '@/atoms/audio-speed.atom'

export default function usePlayer (url) {

    const [playerIsLoaded, setPlayerIsLoaded] = useRecoilState (playerIsLoadedAtom)
    const speed = useRecoilValue (audioSpeedAtom)
    const source = url

    console.log (source)

    useEffect (async () => {

        if (!playerIsLoaded) {

            const response = await axios (source, {
                'mode': 'no-cors',
                'headers': {},
                'responseType': 'arraybuffer',
            })

            const blob = new Blob ([response.data], { 'type': response.headers['content-type'] })
            const url = URL.createObjectURL (blob)

            const player = new Howl ({
                'src': [url],
                'format': 'mp3',
                'rate': speed,
                'onload': () => {

                    setPlayerIsLoaded (true)

                },
            })

            player.play ()

        }

        // eslint-disable-next-line no-console
        console.log ('playerIsLoaded', playerIsLoaded)

    }, [playerIsLoaded])

    return [{ playerIsLoaded }]

}