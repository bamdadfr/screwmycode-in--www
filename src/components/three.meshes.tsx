import { IMeshes, IPropsScale } from './three.types'
import { ThreeMeshesCube } from './three.meshes.cube'
import { ThreeMeshesSphere } from './three.meshes.sphere'

export const ThreeMeshes = (scene: any, params: IPropsScale): IMeshes => {

    const { scale } = params
    const sphere = ThreeMeshesSphere (scene, scale)
    const cube = ThreeMeshesCube (scene, scale)

    return ({
        'backgroundGroup': sphere,
        'frontGroup': cube,
    })

}
