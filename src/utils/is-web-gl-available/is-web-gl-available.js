/**
 * Utility to check if the browser supports WebGL.
 *
 * @see https://github.com/mrdoob/three.js/blob/master/examples/jsm/capabilities/WebGL.js
 * @returns {boolean} - True if WebGL is supported, false otherwise.
 */
export function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
}
