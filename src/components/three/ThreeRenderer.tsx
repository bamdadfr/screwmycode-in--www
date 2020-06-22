import { IContainer } from './types'

const THREE = require ('three')

export default (container: IContainer): void => {

    const renderer = new THREE.WebGLRenderer ({ 'antialias': true })

    renderer.setSize (container.clientWidth, container.clientHeight)

    renderer.setPixelRatio (window.devicePixelRatio)

    renderer.gammaFactor = 2.2

    renderer.ouputEncoding = THREE.LinearEncoding

    renderer.physicallyCorrectLights = true

    container.appendChild (renderer.domElement)

    return renderer

}
