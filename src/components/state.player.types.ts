export interface IStatePlayer {
    speed: number,
    src: string|undefined,
    title: string|undefined,
    isPlaying: boolean,
    isLoading: boolean,
    isError: boolean,
}

export type IStatePlayerActions =
| ISetStatePlayerInit
| ISetStatePlayerSpeed
| ISetStatePlayerSrc
| ISetStatePlayerTitle
| ISetStatePlayerIsPlaying
| ISetStatePlayerData
| ISetStatePlayerIsLoading

export const SET_STATE_PLAYER_INIT = 'SET_STATE_PLAYER_INIT'

interface ISetStatePlayerInit {
    type: typeof SET_STATE_PLAYER_INIT,
}

export const SET_STATE_PLAYER_SPEED = 'SET_STATE_PLAYER_SPEED'

interface ISetStatePlayerSpeed {
    type: typeof SET_STATE_PLAYER_SPEED
    payload: IStatePlayer['speed']
}

export const SET_STATE_PLAYER_SRC = 'SET_STATE_PLAYER_SRC'

interface ISetStatePlayerSrc {
    type: typeof SET_STATE_PLAYER_SRC,
    payload: IStatePlayer['src'],
}

export const SET_STATE_PLAYER_TITLE = 'SET_STATE_PLAYER_TITLE'

interface ISetStatePlayerTitle {
    type: typeof SET_STATE_PLAYER_TITLE,
    payload: IStatePlayer['title'],
}

export const SET_STATE_PLAYER_IS_PLAYING = 'SET_STATE_PLAYER_IS_PLAYING'

interface ISetStatePlayerIsPlaying {
    type: typeof SET_STATE_PLAYER_IS_PLAYING
    payload: IStatePlayer['isPlaying']
}

export const SET_STATE_PLAYER_DATA = 'SET_STATE_PLAYER_DATA'

interface ISetStatePlayerData {
    type: typeof SET_STATE_PLAYER_DATA
    payload: any,
}

export const SET_STATE_PLAYER_IS_LOADING = 'SET_STATE_PLAYER_IS_LOADING'

interface ISetStatePlayerIsLoading {
    type: typeof SET_STATE_PLAYER_IS_LOADING,
    payload: IStatePlayer['isLoading'],
}