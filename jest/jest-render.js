import React from 'react'
import { render } from '@testing-library/react'
import { JestWithStyledComponents } from './jest-with-styled-components'

/**
 * @function
 * @name JestRender
 * @description jest: get a render from testing-library
 * @param {React.ReactElement} Component - react component to render
 * @returns {object} - testing library render
 */
export function JestRender (Component) {

    return render (
        JestWithStyledComponents (Component),
    )

}