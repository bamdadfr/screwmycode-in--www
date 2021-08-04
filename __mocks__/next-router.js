const on = jest.fn ((eventType, listenerFunction) => ({
    eventType,
    listenerFunction,
}))

const off = jest.fn ((eventType, listenerFunction) => ({
    eventType,
    listenerFunction,
}))

module.exports = {
    'useRouter': () => ({
        'route': '/',
        'pathname': '',
        'query': '',
        'asPath': '',
        'events': {
            on,
            off,
        },
    }),
}