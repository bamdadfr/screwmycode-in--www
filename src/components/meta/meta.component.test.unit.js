import React from 'react'
import { MetaComponent, defaultProps } from './meta.component'
import { JestInstance } from '../../../jest/jest-instance'

const instance = JestInstance (
    <MetaComponent
        title={defaultProps.metaTitle}
        description={defaultProps.metaDescription}
        url={defaultProps.metaUrl}
        image={defaultProps.metaImage}
    />,
)

it ('should mount and match', () => {

    expect (instance).toBeDefined ()

    expect (instance).toMatchSnapshot ()

})
