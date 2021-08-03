// arguments
export const MOCK_URL = 'http://localhost/my-file.mp3'

// state
export const MOCK_AUDIO_REF = {
    'current': {
        'loop': undefined,
        'mozPreservesPitch': undefined,
        'playbackRate': undefined,
        'volume': undefined,
        'currentTime': undefined,
        // actions
        'play': jest.fn (),
        'pause': jest.fn (),
        // events
        'addEventListener': jest.fn ((eventType, listenerFunction) => ({
            eventType,
            listenerFunction,
        })),
        'removeEventListener': jest.fn ((eventType, listenerFunction) => ({
            eventType,
            listenerFunction,
        })),
    },
}

export const MOCK_AUDIO = MOCK_AUDIO_REF.current