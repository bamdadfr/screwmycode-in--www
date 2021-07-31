import create from 'zustand'

export const useStore = create (
    (set) => ({
        // load
        'isLoaded': false,
        'setIsLoaded': (v) => set (() => ({ 'isLoaded': v })),
        // play-pause
        'isPlaying': false,
        'togglePlayPause': () => set ((s) => ({ 'isPlaying': !s.isPlaying })),
        'play': () => set (() => ({ 'isPlaying': true })),
        'pause': () => set (() => ({ 'isPlaying': false })),
        // repeat
        'isRepeat': true,
        'toggleRepeat': () => set ((s) => ({ 'isRepeat': !s.isRepeat })),
        // volume
        'volume': 0.7,
        'setVolume': (v) => set ({ 'volume': parseFloat (v) }),
        // mute
        'isMuted': false,
        'toggleMute': () => set ((s) => ({ 'isMuted': !s.isMuted })),
        // duration
        'duration': 0,
        'setDuration': (v) => set (() => ({ 'duration': v })),
        // progress
        'progress': 0,
        'setProgress': (v) => set (() => ({ 'progress': v })),
        // seek
        'seek': 0,
        'setSeek': (v) => set (() => ({ 'seek': v })),
        'seekMax': undefined,
        'setSeekMax': (v) => set (() => ({ 'seekMax': v })),
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