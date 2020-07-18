import {
    IStateThree,
    IStateThreeActions,
    SET_STATE_THREE_VISIBLE,
    SET_STATE_THREE_REF,
} from './state.three.types'
import { isProduction } from './app.utils'

const init: IStateThree = {
    'visible': isProduction () ? true : false,
}

export const threeReducer = (
    state = init,
    action: IStateThreeActions,
): IStateThree => {

    switch (action.type) {

        case SET_STATE_THREE_VISIBLE:
            return {
                ...state,
                'visible': action.payload,
            }

        case SET_STATE_THREE_REF:
            return {
                ...state,
                'ref': action.payload,
            }

        default:
            return state
    
    }

}