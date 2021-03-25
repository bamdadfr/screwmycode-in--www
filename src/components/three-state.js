import { atom } from 'recoil'
import * as THREE from 'three'
import { AppUtilsIsProduction } from './app-utils'

export const threeStateVisible = atom ({
    'key': 'threeStateVisible',
    'default': AppUtilsIsProduction (),
})

export const threeClock = atom ({
    'key': 'threeClock',
    'default': new THREE.Clock (),
})