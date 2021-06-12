import React from 'react'
import { Helmet } from 'react-helmet'
import { MetaData } from '@/data/meta.data'

export default function Index () {

    return (
        <>
            <Helmet
                title="screwmycode.in"
                meta={[
                    ...MetaData,
                ]}
            />
            <div>
                test
            </div>
        </>
    )

}