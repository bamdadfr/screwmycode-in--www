export const MOCK_URL = 'http://localhost/my-file.mp3'

export const MOCK_AUDIO = document.createElement ('audio')

export const SPY_AUDIO = {
    'play': jest.spyOn (MOCK_AUDIO, 'play'),
    'pause': jest.spyOn (MOCK_AUDIO, 'pause'),
    'addEventListener': jest
        .spyOn (MOCK_AUDIO, 'addEventListener')
        .mockReturnValue ((eventType, listenerFunction) => ({
            eventType,
            listenerFunction,
        })),
    'removeEventListener': jest
        .spyOn (MOCK_AUDIO, 'removeEventListener')
        .mockReturnValue ((eventType, listenerFunction) => ({
            eventType,
            listenerFunction,
        })),
}