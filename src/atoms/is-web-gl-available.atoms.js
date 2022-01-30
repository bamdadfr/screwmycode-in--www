import {atom} from 'jotai';

/**
 * Utility to check if the browser supports WebGL.
 *
 * @see https://github.com/mrdoob/three.js/blob/master/examples/jsm/capabilities/WebGL.js
 * @returns {boolean} - True if WebGL is supported, false otherwise.
 */
function isWebGlAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
}

export const isWebGlAvailableAtom = atom(isWebGlAvailable());
