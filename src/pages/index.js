import React from 'react'
import { DefaultLayout } from '../layouts'
import { HomeModule } from '../modules'

/**
 * @returns {React.ReactElement} react component
 */
export default function IndexPage () {

    return (
        <>
            <DefaultLayout>
                <HomeModule/>
            </DefaultLayout>
        </>
    )

}