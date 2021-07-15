import create from 'zustand'

export const useStore = create (
    (set) => ({
        // repeat
        'repeat': true,
        'toggleRepeat': () => set (
            (state) => ({
                'repeat': !state.repeat,
            }),
        ),
        // volume
        'volume': 1,
        'setVolume': (newVolume) => set (
            () => ({
                'volume': parseFloat (newVolume),
            }),
        ),
    }),
)