import React from 'react'
import { FormComponent } from '../domains/home'
import { HomeLayout } from '../layouts'

/**
 * @function
 * @name IndexPage
 * @description /
 * @returns {React.ReactElement} - react component
 */
export default function IndexPage () {

    return (
        <>
            <HomeLayout>
                <FormComponent/>
            </HomeLayout>
        </>
    )

}