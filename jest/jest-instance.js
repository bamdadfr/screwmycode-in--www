import React from 'react'
import renderer from 'react-test-renderer'
import { JestWithStyledComponents } from './jest-with-styled-components'

/**
 * @function
 * @name JestInstance
 * @description jest: get an instance from 'react-test-renderer'
 * @param {React.ReactElement} Component - react component
 * @returns {object} - json
 */
export function JestInstance (Component) {

    return renderer.create (
        JestWithStyledComponents (Component),
    ).toJSON ()

}