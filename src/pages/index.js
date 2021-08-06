import React from 'react'
import { DefaultLayout } from '../layouts/default/default.layout'
import { FormComponent } from '../components/form/form.component'

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