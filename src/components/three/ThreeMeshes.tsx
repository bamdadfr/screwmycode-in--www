import { IMeshes, IPropsScale } from './types'

const THREE = require ('three')

export default (scene: any, params: IPropsScale): IMeshes => {

    const { scale } = params
    /**
   * creating groups
   * @type {Group}
   */
    const backgroundGroup = new THREE.Group ()
    const frontGroup = new THREE.Group ()

    scene.add (
        backgroundGroup,
        frontGroup,
    )

    /**
   * creating
   * background geometries
   * adding materials to get meshes
   * adding meshes to the group
   * @type {SphereBufferGeometry}
   * @type {Mesh}
   */

    const backgroundSphere = new THREE.SphereBufferGeometry (
        scale.default,
        10,
        10,
    )

    const backgroundSphereMesh = new THREE.Mesh (
        backgroundSphere,
        new THREE.MeshBasicMaterial ({
            'wireframe': true,
        }),
    )

    backgroundGroup.add (backgroundSphereMesh)

    /**
   * creating
   * front geometries
   * adding materials to get meshes
   * adding meshes to the group
   * @type {SphereBufferGeometry}
   * @type {Mesh}
   */

    const frontCube = new THREE.BoxBufferGeometry (
        scale.default * scale.front,
        scale.default * scale.front,
        scale.default * scale.front,
    )

    const frontCubeMesh = new THREE.Mesh (
        frontCube,
        new THREE.MeshNormalMaterial (),
    )

    frontGroup.add (frontCubeMesh)

    return ({
        backgroundGroup,
        frontGroup,
    })

}
