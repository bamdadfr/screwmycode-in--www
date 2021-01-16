import * as THREE from 'three'
import { IContainer } from './three.types'

// const THREE = require ('three')

export const ThreeRenderer = (container: IContainer): any => {

    const renderer = new THREE.WebGLRenderer ({ 'antialias': true })

    renderer.setSize (container.clientWidth, container.clientHeight)

    renderer.setPixelRatio (window.devicePixelRatio)

    renderer.physicallyCorrectLights = true

    // @ts-ignore
    container.appendChild (renderer.domElement)

    return renderer

}
