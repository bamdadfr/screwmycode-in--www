import React from 'react'
import { CoreLayout } from '..'
import { Container } from './home-layout-styles'
import { FormComponent } from '../../domains/home'

/**
 * @returns {React.ReactElement} react component
 */
export function HomeLayout () {

    return (
        <>
            <CoreLayout>
                <Container>
                    <FormComponent/>
                </Container>
            </CoreLayout>
        </>
    )

}