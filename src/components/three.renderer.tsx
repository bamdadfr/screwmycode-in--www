import { IContainer } from './three.types'

const THREE = require ('three')

export const ThreeRenderer = (container: IContainer): void => {

    const renderer = new THREE.WebGLRenderer ({ 'antialias': true })

    renderer.setSize (container.clientWidth, container.clientHeight)

    renderer.setPixelRatio (window.devicePixelRatio)

    renderer.gammaFactor = 2.2

    renderer.ouputEncoding = THREE.LinearEncoding

    renderer.physicallyCorrectLights = true

    container.appendChild (renderer.domElement)

    return renderer

}
