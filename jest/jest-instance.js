import React from 'react'
import renderer from 'react-test-renderer'
import { JestWrapper } from './jest-wrapper'

/**
 * @function
 * @name JestInstance
 * @description jest: get an instance from 'react-test-renderer'
 * @param {React.ReactElement} Component - react component
 * @returns {object} - json
 */
export function JestInstance (Component) {

    return renderer.create (
        JestWrapper (Component),
    ).toJSON ()

}