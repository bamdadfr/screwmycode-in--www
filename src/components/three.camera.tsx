import * as THREE from 'three'
import { IContainer } from './three.types'

export const ThreeCamera = (container: IContainer): any => {

    const camera = new THREE.PerspectiveCamera (
        35,
        container.clientWidth / container.clientHeight,
        0.1,
        100,
    )

    camera.position.set (0, 0, 0)

    camera.lookAt (0, 0, 0)

    return camera

}
