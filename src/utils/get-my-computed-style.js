import React from 'react'

/**
 * @param {React.Ref} ref react element ref
 * @param {string} property css property
 * @returns {number} without 'px'
 */
export function getMyComputedStyle (ref, property) {

    return window
        .getComputedStyle (ref.current, null)
        .getPropertyValue (property)
        .replace ('px', '')

}