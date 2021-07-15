import React from 'react'
import { MetaComponent } from './meta.component'
import { JestInstance } from '../../../../jest/jest-instance'
import { defaultProps } from '../../../layouts/core/core.layout'

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
