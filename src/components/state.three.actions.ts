import {
    IStateThree,
    IStateThreeActions,
    SET_STATE_THREE_VISIBLE,
    SET_STATE_THREE_REF,
} from './state.three.types'

export const setStateThreeVisible = (payload: IStateThree['visible']): IStateThreeActions => ({
    type: SET_STATE_THREE_VISIBLE,
    payload,
})

export const setStateThreeRef = (payload: IStateThree['ref']): IStateThreeActions => ({
    type: SET_STATE_THREE_REF,
    payload,
})