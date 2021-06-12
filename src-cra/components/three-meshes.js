import { ThreeMeshesCube } from './three-meshes-cube'
import { ThreeMeshesSphere } from './three-meshes-sphere'

export const ThreeMeshes = (scene, params) => {

    const { scale } = params
    const sphere = ThreeMeshesSphere (scene, scale)
    const cube = ThreeMeshesCube (scene, scale)

    return ({
        'backgroundGroup': sphere,
        'frontGroup': cube,
    })

}
