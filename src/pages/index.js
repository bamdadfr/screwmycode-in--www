// noinspection JSUnusedGlobalSymbols

import React from 'react'
import { DefaultLayout } from '../layouts'
import { FormComponent } from '../components'

/**
 * @returns {React.ReactElement} react component
 */
export default function IndexPage () {

    return (
        <>
            <DefaultLayout>
                <FormComponent/>
            </DefaultLayout>
        </>
    )

}