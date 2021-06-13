import React from 'react'
import { Helmet } from 'react-helmet'
import { MetaData } from '@/data/meta.data'
import Link from 'next/link'

export default function YoutubePage () {

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