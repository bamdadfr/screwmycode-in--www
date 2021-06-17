import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { playerIsLoadedAtom } from '@/atoms/player-is-loaded.atom'
import axios from 'axios'
import { Howl } from 'howler'

export default function usePlayer () {

    const [playerIsLoaded, setPlayerIsLoaded] = useRecoilState (playerIsLoadedAtom)

    useEffect (async () => {

        if (!playerIsLoaded) {

            const source = 'https://cors-anywhere.herokuapp.com/https://r3---sn-n4g-ator.googlevideo.com/videoplayback?expire=1623605825&ei=4e3FYKDOBdGW1wal84OwAg&ip=212.47.247.93&id=o-AOhKgga_k-YsxGqW3u4V3xC2YohFm12Ot4-abny6AgR_&itag=140&source=youtube&requiressl=yes&vprv=1&mime=audio%2Fmp4&ns=h5OngXZyX5gaKMT17xKCgekF&gir=yes&clen=3108903&dur=192.052&lmt=1614902926589602&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=6311222&n=KqyIDZIE2Ye0HJBFaKm&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&ratebypass=yes&sig=AOq0QJ8wRQIhAK2eBYYPlKLQCVhnOnwZveWoTmQsKleZ8IN5EPEOvzn7AiAiT3gye4m8-EzgWnFW5ROiTXsUb3wGkEzXYkbSx1DEQg%3D%3D&redirect_counter=1&rm=sn-25gds7s&req_id=a8c6c7e9590d36e2&cms_redirect=yes&ipbypass=yes&mh=DT&mip=87.231.145.75&mm=31&mn=sn-n4g-ator&ms=au&mt=1623583958&mv=m&mvi=3&pl=23&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgNknknorWZRKYuOKtK354earXKgGLyJg1EoOBPhiBKOkCIQDNIdfcm-T7XT22UuTJtoOOsptrYoHfxs9ldD6EH-hDnw%3D%3D'

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
                'rate': 1.5,
                'onload': () => {

                    setPlayerIsLoaded (true)
                
                },
            })

            setTimeout (() => {

                player.rate (0.815)

            }, 5000)

            player.play ()

        }

        // eslint-disable-next-line no-console
        console.log ('playerIsLoaded', playerIsLoaded)

    }, [playerIsLoaded])

    return [{ playerIsLoaded }]

}