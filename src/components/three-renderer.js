import * as THREE from 'three'

export const ThreeRenderer = (container) => {

    const renderer = new THREE.WebGLRenderer ({
        'antialias': true,
    })

    renderer.setSize (container.clientWidth, container.clientHeight)

    renderer.setPixelRatio (Math.min (window.devicePixelRatio, 2))

    renderer.physicallyCorrectLights = true

    container.appendChild (renderer.domElement)

    return renderer

}
