import create from 'zustand'

export const useStore = create (
    (set) => ({
        // general
        'isLoaded': false,
        // repeat
        'repeat': true,
        'toggleRepeat': () => set (
            (state) => ({
                'repeat': !state.repeat,
            }),
        ),
        // volume
        'volume': 1,
        'setVolume': (newVolume) => set ({
            'volume': parseFloat (newVolume),
        }),
        // speed
        'speed': 1,
        'setSpeed': (newSpeed) => set (
            () => {

                let speed = parseFloat (newSpeed)

                if (newSpeed < 0.5) speed = 0.5

                if (newSpeed > 1.5) speed = 1.5

                return { speed }
            
            },
        ),
        // audio title
        'audioTitle': undefined,
        'setAudioTitle': (newAudioTitle) => set ({
            'audioTitle': newAudioTitle.toString (),
        }),
    }),
)