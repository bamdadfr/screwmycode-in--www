import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { MetaData } from '@/data/meta.data'
import Link from 'next/link'
import { Howl } from 'howler'
import axios from 'axios'

export default function YoutubePage () {

    useEffect (async () => {

        const source = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3'
        const source2 = 'https://r6---sn-5hnedn7e.googlevideo.com/videoplayback?expire=1623555642&ei=2inFYMKnC5OAW43lrpAG&ip=212.47.247.93&id=o-ACjfrX0v3IobXUhqksD8VkifH9Jftw6ooqTXihK3kRqG&itag=140&source=youtube&requiressl=yes&pcm2=no&vprv=1&mime=audio%2Fmp4&ns=yZtD0NC2XCTMyguPIYnb-PcF&gir=yes&clen=4128214&dur=257.090&lmt=1412914292832756&keepalive=yes&fexp=24001373,24007246&c=WEB&n=fYdJVeWQsj4Ogl68nsn&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cpcm2%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&ratebypass=yes&sig=AOq0QJ8wRgIhAP3zYqI1HaYDxw724c1rRgOVsc0LpdRpfpz37xeSilgFAiEAtAb4YRKASV0fvSZ-4FdqyuFvx5wdxWvIsC5uJlaGz-A%3D&rm=sn-25gkz7z&req_id=ab87e027f4e7a3ee&cm2rm=sn-n4g-ator7z,sn-n4g-jqbe67d,sn-25gkr7z&ipbypass=yes&redirect_counter=4&cms_redirect=yes&mh=U4&mip=87.231.145.75&mm=34&mn=sn-5hnedn7e&ms=ltu&mt=1623533917&mv=u&mvi=6&pl=23&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAOKdH0mukKdjdaRX1wk65JJdfIkuVm-F8A4_2sYZp5CkAiAjcojTixFuhODaPYe0f5cQPv0KvP42ACy9QSt0YXAuGw%3D%3D'
        const source3 = 'https://r4---sn-n4g-ator.googlevideo.com/videoplayback?expire=1623556765&ei=PS7FYMemDLX6xN8Ps7qggAw&ip=87.231.145.75&id=o-ABMl9uTa4usHME_-BV7IzkmPkL2BRDs75N29ZE_1bQ3f&itag=140&source=youtube&requiressl=yes&mh=U4&mm=31%2C29&mn=sn-n4g-ator%2Csn-n4g-jqbe6&ms=au%2Crdu&mv=m&mvi=4&pl=23&initcwndbps=1631250&vprv=1&mime=audio%2Fmp4&ns=jIvsMkN1BmVL-bZyXsgydKMF&gir=yes&clen=4128214&dur=257.090&lmt=1412914292832756&mt=1623534757&fvip=6&keepalive=yes&fexp=24001373%2C24007246&c=WEB&n=q8bmZnq9MKrsMPG83tI&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgV3YaYhsAkolkn5SBy909z9d05HsRiF-enn3mZi4knh8CIFpStB5QeTvsp2iEQVjdxNpOGB7RLaB61dlRFp_4osba&sig=AOq0QJ8wRgIhAJ8cIOK2sIMcSiJUX47j409tKy9zWiRA_W_qEktdIW25AiEA-9qwGaGp6MeA5hlk4i5rIfitKrCPr6ci0SW-D4DX61U='

        const howl = new Howl ({
            'src': [source],
            'format': 'mp3',
            'autoplay': false,
            'rate': 0.5,
        })

        axios (source, {
            'headers': {},
            'responseType': 'arraybuffer',
        })
            .then (response => {

                const blob = new Blob ([response.data], { 'type': response.headers['content-type'] })
                const url = URL.createObjectURL (blob)

                const howl = new Howl ({
                    'src': [url],
                    'format': 'mp3',
                    'autoplay': true,
                    'rate': 1.5,
                })

            })

    }, [])

    return (
        <>
            <Helmet
                title="screwmycode.in"
                meta={[
                    ...MetaData,
                ]}
            />
            <div>
                <div>
                    <Link href="/">
                        <a>/</a>
                    </Link>
                </div>
                <div>
                    test
                </div>
            </div>
        </>
    )

}