import { atom } from 'recoil'
import { isProduction } from './app.utils'

export const threeStateVisible = atom ({
    'key': 'threeStateVisible',
    'default': isProduction () ? true : false,
})