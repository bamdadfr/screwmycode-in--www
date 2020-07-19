import { atom } from 'recoil'

export const playerStateSpeed = atom ({
    'key': 'playerStateSpeed',
    'default': 1,
})

export const playerStateSource = atom ({
    'key': 'playerStateSource',
    'default': '',
})

export const playerStateTitle = atom ({
    'key': 'playerStateTitle',
    'default': '',
})

export const playerStateIsPlaying = atom ({
    'key': 'playerStateIsPlaying',
    'default': false,
})