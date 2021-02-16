import { atom } from 'recoil'
import { AppUtilsIsProduction } from './app-utils'

export const threeStateVisible = atom ({
    'key': 'threeStateVisible',
    'default': AppUtilsIsProduction (),
})