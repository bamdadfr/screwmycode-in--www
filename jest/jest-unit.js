import React from 'react'
import { shallow } from 'enzyme'
import { JestWithStyledComponents } from './jest-with-styled-components'

/**
 * @function
 * @name JestUnit
 * @description jest: get unit from enzyme
 * @param {React.ReactElement} Component - react component
 * @param {boolean} [wrap=false] - wrap with state and theme...
 * @returns {object} - enzyme shallow object
 */
export function JestUnit (Component, wrap = false) {

    if (wrap) {

        return shallow (
            JestWithStyledComponents (Component),
        )

    }

    return shallow (Component)

}