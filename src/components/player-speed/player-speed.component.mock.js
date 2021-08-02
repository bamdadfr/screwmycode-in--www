import * as usePlayerSpeedComponent from './hooks/use-player-speed-component'

const SPY = jest.spyOn (usePlayerSpeedComponent, 'usePlayerSpeedComponent')

export const MOCK_STATE = () => {

    const response = {
        'value': 1,
        'onChange': jest.fn (),
    }

    SPY.mockReturnValue (response)

    return response

}