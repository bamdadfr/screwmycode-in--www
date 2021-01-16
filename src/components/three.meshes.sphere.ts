import * as THREE from 'three'

export const ThreeMeshesSphere = (scene: any, scale: any): any => {

    const group = new THREE.Group ()

    scene.add (group)

    const sphere = new THREE.SphereBufferGeometry (
        scale.default,
        10,
        10,
    )

    const sphereMesh = new THREE.Mesh (
        sphere,
        new THREE.MeshBasicMaterial ({
            'wireframe': true,
        }),
    )

    group.add (sphereMesh)

    return group

}