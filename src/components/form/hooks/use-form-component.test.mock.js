export const MOCK_LINK = {
    'ref': {
        'current': document.createElement ('input'),
    },
    'value': '',
    'onChange': jest.fn (),
    'resetValue': jest.fn (),
}

export const SPY_LINK = {
    'blur': jest.spyOn (MOCK_LINK.ref.current, 'blur'),
    'focus': jest.spyOn (MOCK_LINK.ref.current, 'focus'),
    'addEventListener':
        jest
            .spyOn (MOCK_LINK.ref.current, 'addEventListener')
            .mockReturnValue ((eventType, listenerFunction) => ({
                eventType,
                listenerFunction,
            })),
    'removeEventListener':
        jest
            .spyOn (MOCK_LINK.ref.current, 'removeEventListener')
            .mockReturnValue ((eventType, listenerFunction) => ({
                eventType,
                listenerFunction,
            })),
}