export interface IStateThree {
    visible: boolean,
    ref?: any,
}

export type IStateThreeActions =
ISetStateThreeVisible
| ISetStateThreeRef

export const SET_STATE_THREE_VISIBLE = 'SET_STATE_THREE_VISIBLE'

interface ISetStateThreeVisible {
    type: typeof SET_STATE_THREE_VISIBLE,
    payload: IStateThree['visible'],
}

export const SET_STATE_THREE_REF = 'SET_STATE_THREE_REF'

interface ISetStateThreeRef {
    type: typeof SET_STATE_THREE_REF,
    payload: IStateThree['ref']
}