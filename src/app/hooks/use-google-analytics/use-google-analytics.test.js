import { renderHook } from '@testing-library/react-hooks'
import { useGoogleAnalytics } from './use-google-analytics'

const MOCK_EVENTS_ON = jest.fn ((event, listener) => ({
    event,
    listener,
}))

const MOCK_EVENTS_OFF = jest.fn ((event, listener) => ({
    event,
    listener,
}))

jest.mock ('next/router', () => ({
    useRouter () {

        return {
            'route': '/',
            'pathname': '',
            'query': '',
            'asPath': '',
            'events': {
                'on': MOCK_EVENTS_ON,
                'off': MOCK_EVENTS_OFF,
            },
        }

    },
}))

afterEach (() => {

    jest.resetAllMocks ()

})

describe ('useGoogleAnalytics', () => {

    describe ('global', () => {

        it ('should be defined', () => {

            const hook = renderHook (() => useGoogleAnalytics ())

            expect (hook).toBeDefined ()

        })
    
    })

    describe ('routeChangeComplete event', () => {

        it ('should mount function', () => {

            renderHook (() => useGoogleAnalytics ())

            expect (MOCK_EVENTS_ON).toHaveBeenCalledTimes (1)

            expect (MOCK_EVENTS_ON.mock.calls[0][0]).toEqual ('routeChangeComplete')

            expect (typeof MOCK_EVENTS_ON.mock.calls[0][1]).toEqual ('function')

        })

        it ('should unmount function', () => {

            const { unmount } = renderHook (() => useGoogleAnalytics ())

            unmount ()

            expect (MOCK_EVENTS_OFF).toHaveBeenCalledTimes (1)

            expect (MOCK_EVENTS_OFF.mock.calls[0][0]).toEqual ('routeChangeComplete')

            expect (typeof MOCK_EVENTS_OFF.mock.calls[0][1]).toEqual ('function')

        })

    })

})