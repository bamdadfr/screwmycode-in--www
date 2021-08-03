const ReactHowler = require ('react-howler')

const MOCK_REF = {
    'current': new ReactHowler (),
}

export const MOCK_HOWLER = MOCK_REF.current

MOCK_HOWLER.rate = () => undefined

MOCK_HOWLER.volume = () => undefined

export const SPY_HOWLER = {
    'duration': jest
        .spyOn (MOCK_HOWLER, 'duration')
        .mockReturnValue (60 * 5),
    'seek': jest.spyOn (MOCK_HOWLER, 'seek'),
    'rate': jest.spyOn (MOCK_HOWLER, 'rate'),
    'volume': jest.spyOn (MOCK_HOWLER, 'volume'),
}