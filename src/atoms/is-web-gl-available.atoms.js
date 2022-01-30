import {atom} from 'jotai';

/**
 * Utility to check if the browser supports WebGL.
 *
 * @see https://github.com/mrdoob/three.js/blob/master/examples/jsm/capabilities/WebGL.js
 * @returns {boolean} - True if WebGL is supported, false otherwise.
 */
function isWebGlAvailable() {
  let isWebGl;
  let isWebGl2;

  // WebGL
  try {
    const canvas = document.createElement('canvas');
    isWebGl = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    isWebGl = false;
  }

  // WebGL2
  try {
    const canvas = document.createElement('canvas');
    isWebGl2 = !!(window.WebGL2RenderingContext && canvas.getContext('webgl2'));
  } catch (e) {
    isWebGl2 = false;
  }

  return isWebGl === true && isWebGl2 === true;
}

export const isWebGlAvailableAtom = atom(isWebGlAvailable());
