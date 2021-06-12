import React from 'react'
import Link from 'next/link'
import { Helmet } from 'react-helmet'
import { MetaData } from '@/data/meta.data'

export default function IndexPage () {

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
                    <Link href="/youtube">
                        <a>/youtube</a>
                    </Link>
                </div>
            </div>
        </>
    )

}