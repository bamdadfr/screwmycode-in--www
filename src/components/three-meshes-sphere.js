import * as THREE from 'three'

export const ThreeMeshesSphere = (scene, scale) => {

    const group = new THREE.Group ()

    scene.add (group)

    const sphere = new THREE.SphereBufferGeometry (
        scale.default,
        100,
        100,
    )

    const sphereMesh = new THREE.Mesh (
        sphere,
        new THREE.MeshBasicMaterial ({
            'wireframe': true,
            'color': 0x222222,
        }),
    )

    group.add (sphereMesh)

    return group

}